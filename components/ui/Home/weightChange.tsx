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

    event.preventDefault(); //prevent the default form submission

    const formElements = (event.target as HTMLFormElement).elements; //getting all the forms element

    // console.log(formElements);
    const current = formElements.namedItem("current"); //getting the current weight
    const goal = formElements.namedItem("goal"); //getting the goal weight
    let currentWeight, goalWeight; //initializing the current and goal weight
    if (current)  currentWeight = (current as HTMLInputElement).value; //getting the current weight
    if (goal)  goalWeight = (goal as HTMLInputElement).value; //getting the goal weight

    //passing the the new weights back up to the parent component
    props.changeWeight(currentWeight, goalWeight);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="current" className="text-right">
              current weight
            </Label>
            <Input id="current" placeholder="45 KG" className="col-span-3" value={props.currentWeight} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="goal" className="text-right">
              goal weight
            </Label>
            <Input id="goal" placeholder="65 KG" className="col-span-3" value={props.goalWeight}/>
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
