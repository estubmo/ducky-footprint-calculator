"use client";
import { Button } from "@/components/ui/button";
import {
    FormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateFootprint } from "../actions";
import { useForm } from "react-hook-form";
import { Footprint } from "@/types";
import { footprintFormSchema } from "@/schemas";

export function FootprintForm() {
    const form = useForm<Footprint>({
        resolver: zodResolver(footprintFormSchema),
        defaultValues: {
            name: "John",
            monthlyIncomeAfterTax: 60000,
        },
    });

    async function onSubmit(values: Footprint) {
        const res = await calculateFootprint(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="monthlyIncomeAfterTax"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Monthly income of the household after tax</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
