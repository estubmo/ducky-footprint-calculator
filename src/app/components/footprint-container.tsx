"use client";

import { FootprintForm } from "./footprint-form";
import { FootprintResult } from "./footprint-result";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateFootprint } from "../actions";
import { useForm } from "react-hook-form";
import { Footprint } from "@/types";
import { footprintFormSchema } from "@/schemas";
import { useState } from "react";

export function FootprintContainer() {
    const [annualFootprint, setAnnualFootprint] = useState<number | null>(null);
    const form = useForm<Footprint>({
        resolver: zodResolver(footprintFormSchema),
        defaultValues: {
            name: "John",
            monthlyIncomeAfterTax: 60000,
        },
    });

    const name = form.watch("name");

    async function onSubmit(values: Footprint) {
        const res = await calculateFootprint(values);
        setAnnualFootprint(res.totalCo2Kg);
    }

    return (
        <div className="flex min-h-screen w-full">
            <div className="bg-[#CCEBEE] w-[614px] flex flex-col justify-center items-center">
                <FootprintForm form={form} onSubmit={onSubmit} />
            </div>
            <div className="flex w-full grow justify-center">
                <FootprintResult name={name} annualFootprint={annualFootprint} />
            </div>
        </div>
    );
}
