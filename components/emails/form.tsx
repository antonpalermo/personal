'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@lib/utils'

import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'

import schema from '@/components/emails/schema'

export default function EmailForm() {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: { email: '' },
    resolver: zodResolver(schema)
  })

  async function onSubmit(data: z.infer<typeof schema>) {
    const request = await fetch('/api/mailer', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic ' + process.env.NEXT_PUBLIC_MAILER_API_KEY
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full max-w-sm items-start space-x-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email address"
                    autoComplete="off"
                    {...field}
                    className={cn(
                      fieldState.error &&
                        'border-red-500 text-red-500 ring-red-500 focus-visible:ring-red-500',
                      'sm:min-w-80'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Form>
  )
}
