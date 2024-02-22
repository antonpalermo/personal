'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@lib/utils'

import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage
} from '@/components/ui/form'

import schema from '@/components/emails/schema'
import toast from 'react-hot-toast'

export default function EmailForm() {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: { email: '' },
    resolver: zodResolver(schema)
  })

  async function onSubmit(data: z.infer<typeof schema>) {
    const request = await fetch('/api/mailer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email
      })
    })

    if (!request.status) {
      return toast.error(
        'We encountered an error while delivering your request'
      )
    }

    return toast.success('Sent!')
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
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Send
          </Button>
        </div>
      </form>
    </Form>
  )
}
