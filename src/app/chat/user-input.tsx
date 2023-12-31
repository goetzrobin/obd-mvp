"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty...'),
});
const UserInput = (props: { enabled: boolean; onSend: (message: string) => void }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    props.onSend(values.message);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2 mb-8 mt-4 flex items-start justify-between">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>What&apos;s on your mind</FormLabel>
              <FormControl className="w-full">
                <Input className="w-full" placeholder="Type something..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button disabled={!props.enabled} className="mt-8" type="submit">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default UserInput;
