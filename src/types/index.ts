import { footprintFormSchema } from "@/schemas";
import { z } from "zod";

export type Footprint = z.infer<typeof footprintFormSchema>;
