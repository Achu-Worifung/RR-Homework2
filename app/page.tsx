// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

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



export default function Home() {
  let curr_w = 45
  let goal_w = 65
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
                {curr_w} KG
              </h1>
            </span>
            <hr className="w-0.5 h-4/5 bg-black m-2" />
            <span>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                Goal Weight
              </h1>
              <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                {goal_w} KG
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
            <WeightChange />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <DayOfWeek />
      <ResizableDemo />
    </div>
  );
}
