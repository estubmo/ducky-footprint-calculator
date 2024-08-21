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
import { Footprint } from "@/types";
import { parseAsInteger, useQueryState } from "nuqs";
import { UseFormReturn } from "react-hook-form";
export function FootprintForm({
    form,
    onSubmit,
}: { form: UseFormReturn<Footprint>; onSubmit: (values: Footprint) => void }) {
    const [_, setName] = useQueryState("name");
    const [__, setMonthlyIncomeAfterTax] = useQueryState(
        "monthlyIncomeAfterTax",
        parseAsInteger,
    );

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-8 md:min-w-[330px]"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    className="border-[#C5C7CF]"
                                    placeholder="Jon"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                        setName(e.target.value);
                                    }}
                                />
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
                                <Input
                                    className="border-[#C5C7CF]"
                                    placeholder="60,000"
                                    type="number"
                                    {...field}
                                    onChange={async (e) => {
                                        field.onChange(+e.target.value);
                                        setMonthlyIncomeAfterTax(+e.target.value);
                                        const values = form.getValues();
                                        const isValid = await form.trigger();

                                        if (isValid) {
                                            onSubmit(values);
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="font-light bg-[#008290] text-white" type="submit">
                    Calculate footprint
                </Button>
            </form>
        </Form>
    );
}
