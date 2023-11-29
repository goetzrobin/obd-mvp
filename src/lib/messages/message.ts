import * as z from 'zod';

const messageSchema = z.object({
  connectionId: z.string().optional(),
  data: z.string(),
  id: z.string(),
  name: z.string(),
  timestamp: z.number(),
});

export type Message = z.infer<typeof messageSchema>;
