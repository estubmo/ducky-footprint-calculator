"use client";

import { useQueryState, parseAsInteger } from "nuqs";
import { FootprintForm } from "./footprint-form";
import { FootprintResult } from "./footprint-result";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateFootprint } from "../actions";
import { useForm } from "react-hook-form";
import { Footprint } from "@/types";
import { footprintFormSchema } from "@/schemas";
import { useState } from "react";

export function FootprintContainer() {
    const [name] = useQueryState("name");
    const [monthlyIncomeAfterTax] = useQueryState(
        "monthlyIncomeAfterTax",
        parseAsInteger,
    );
    const [annualFootprint, setAnnualFootprint] = useState<number | null>(null);

    const form = useForm<Footprint>({
        resolver: zodResolver(footprintFormSchema),
        defaultValues: {
            name: name || "Jon",
            monthlyIncomeAfterTax: monthlyIncomeAfterTax || 60000,
        },
    });

    async function onSubmit(values: Footprint) {
        const res = await calculateFootprint(values);
        setAnnualFootprint(res.totalCo2Kg);
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full">
            <div className="bg-[#CCEBEE] md:w-[614px] flex flex-col px-4 py-8 justify-center items-center">
                <div className="flex flex-col justify-center items-center md:w-[330px] space-y-12">
                    <h1 className="text-[40px] text-[#004050] font-extralight leading-[54px]">
                        What’s your carbon footprint?
                    </h1>
                    <FootprintForm form={form} onSubmit={onSubmit} />
                </div>
            </div>
            <div className="flex w-full py-8 px-4 grow justify-center">
                <FootprintResult
                    name={name || ""}
                    annualFootprint={annualFootprint}
                    formIsValid={form.formState.isValid}
                />
            </div>
        </div>
    );
}
