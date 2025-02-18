"use client";

import {useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function WeightChange(props:any) {

  // console.log(props);
  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElements = (event.target as HTMLFormElement).elements;
    console.log(formElements);
    const current = formElements.namedItem("current");
    const goal = formElements.namedItem("goal");
    let currentWeight, goalWeight;
    if (current)  currentWeight = (current as HTMLInputElement).value;
    if (goal)  goalWeight = (goal as HTMLInputElement).value;

    props.updateweight(currentWeight, goalWeight);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="current" className="text-right">
              current weight
            </Label>
            <Input id="current" placeholder="45 KG" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="goal" className="text-right">
              goal weight
            </Label>
            <Input id="goal" placeholder="65 KG" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </div>
  );
}
