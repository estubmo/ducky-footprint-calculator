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
import { UseFormReturn } from "react-hook-form";
export function FootprintForm({
    form,
    onSubmit,
}: { form: UseFormReturn<Footprint>; onSubmit: (values: Footprint) => void }) {
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
