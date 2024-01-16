import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const eventSchema = z.object({
  id: z.number(),
  title: z.string(),
  cover: z.string(),
})

export type Task = z.infer<typeof eventSchema>