// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import WeightChange from "@/components/ui/Home/weightChange";
import DayOfWeek from "@/components/ui/Home/dayofWeek";
import ResizableDemo from "@/components/ui/Home/Resizable";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";



export default function Home() {
  //use state to get the current and goal weight
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");


  useEffect(() => 
  {
    let curr_weight = localStorage.getItem("currentWeight");
    let goal_weight = localStorage.getItem("goalWeight");
    if (curr_weight) setCurrentWeight(curr_weight);
    if (goal_weight) setGoalWeight(goal_weight);
  },[])

  const updateweight = (currentWeight: string, goalWeight: string) => {
    setCurrentWeight(currentWeight);
    setGoalWeight(goalWeight);
  };


  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex flex-row items-center h-16  justify-around content-center flex-wrap border-2 border-black rounded-lg min-w-96">
            <span>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                Current Weight
              </h1>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                {currentWeight} KG
              </h1>
            </span>
            <hr className="w-0.5 h-4/5 bg-black m-2" />
            <span>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                Goal Weight
              </h1>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                {goalWeight} KG
              </h1>
            </span>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>change current weight and goal</SheetTitle>
            <SheetDescription>
              This action will change your current weight and goal weight.
            </SheetDescription>
            <WeightChange props= {updateweight}/>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <DayOfWeek />
      <ResizableDemo />
    </div>
  );
}
