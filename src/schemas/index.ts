import { z } from "zod";

export const footprintFormSchema = z.object({
    name: z.string().min(2).max(50),
    monthlyIncomeAfterTax: z.coerce.number().min(0),
});
