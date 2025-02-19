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
import { createServerSearchParamsForServerPage } from "next/dist/server/request/search-params";



export default function Home() {
  //use state to get the current and goal weight
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");


  //use effect to retrive the weight from local storage
  useEffect(() => 
  {
    let curr_weight = localStorage.getItem("currentWeight");
    let goal_weight = localStorage.getItem("goalWeight");
    if (curr_weight) setCurrentWeight(curr_weight);
    if (goal_weight) setGoalWeight(goal_weight);
  },[])

//passsing this function to the child component change weight so the child can return the new weight and the lables can be updated

  const updateweight = (currentWeight: string, goalWeight: string) => {
    setCurrentWeight(currentWeight);
    setGoalWeight(goalWeight);
    //setting the new weight to local storage
    localStorage.setItem("currentWeight", currentWeight);
    localStorage.setItem("goalWeight", goalWeight);
  };


  //passsing this function to the child component change weight so the child can return the new weight and the lables can be updated
  // const changeWeight = ({currentWeight, goalWeight}:any) => {
  //   console.log("from parent component",currentWeight, goalWeight);
  //   //setting the newly entered weight 
  //   updateweight(currentWeight, goalWeight);
  //   //setting the new weight to local storage
  //   localStorage.setItem("currentWeight", currentWeight);
  //   localStorage.setItem("goalWeight", goalWeight);
  // }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
            <WeightChange changeWeight= {updateweight} currentWeight={currentWeight} goalWeight={goalWeight}/>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <DayOfWeek />
      <ResizableDemo />
    </div>
  );
}
