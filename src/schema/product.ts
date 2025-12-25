import { z } from "zod";

export const productFormSchema = z.object({
  category_id: z.string().uuid({ message: "Please select a category" }),
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must be less than 255 characters"),
  description: z
    .string()
    .trim()
    .max(2000, "Description must be less than 2000 characters")
    .optional(),
  tags: z
    .array(z.string().trim().min(1))
    .max(20, "Maximum 20 tags allowed"),
  sale_price: z
    .number()
    .min(0, "Sale price must be greater than or equal to 0"),
  image_id: z.string().uuid({ message: "Please select an image" }),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

