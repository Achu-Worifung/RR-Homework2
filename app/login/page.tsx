"use client";
import { redirect } from 'next/navigation' //for redirection after login
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {Label } from "@radix-ui/react-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});


export default function CustomForm() {

  const[msg, setMsg] = useState("");


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setMsg("");
    validateUser(values);
    // alert("Submitted");
  }
  function validateUser({email, password}: {email: string, password: string}) {
    if(email === "achuworifung@gmail.com" && password === "password") {
      redirect(`/dashboard`) // Navigate to the new post page
    }
    else 
    {
      setMsg("Login failed: Wrong Credentials");
    }
    
  }
  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-6 w-full mx-auto p-12 border rounded-lg shadow">
        

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>Password</Label>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>
          <Link href="/register">Don&apos;t have an account?</Link>
        </FormDescription>
          <Label className='text-red-500'>{msg}</Label>
        <Button type="submit"   className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
