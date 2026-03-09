import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  title: z.string().min(5).max(32)
})

const SignupForm = () => {

  //define your form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
  })

  //define a submit handler
  const onSubmit = (values) => {
    console.log(values) // only runs if validation passes
  }

  return (
    <div >
      <Button>Click me</Button>
    </div>
  )
}

export default SignupForm