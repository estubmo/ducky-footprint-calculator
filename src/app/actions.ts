"use server";

import { Footprint } from "@/types";

export async function calculateFootprint(values: Footprint) {
    const body = JSON.stringify({
        household: {
            monthlyIncomeAfterTax: values.monthlyIncomeAfterTax,
        },
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${process.env.DUCKY_ACCESS_TOKEN}`);

    const res = await fetch(
        `${process.env.DUCKY_API_URL}/calculator?scope=individual`,
        {
            method: "POST",
            headers,
            body,
        },
    );
    const data = await res.json();
    console.log(data);
    return data;
}
