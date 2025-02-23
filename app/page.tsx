"use client";
import { Button } from "@/components/ui/button";
// import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col w-screen">
      <Label className="text-2xl">Already have an account? sign-in</Label>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
