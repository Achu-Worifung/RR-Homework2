import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

  import { Exercise } from "./listExercise"
  
  export default function ResizableDemo() {

    const exercises = [
      { trigger: "Pushups", content: "Do 10 pushups" },
      { trigger: "Situps", content: "Do 10 situps" },
      { trigger: "Squats", content: "Do 10 squats" },
    ]
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-start justify-center p-6">
            <span className="font-semibold">Exercise</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-start justify-center p-6">
            <span className="font-semibold">History</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        
      </ResizablePanelGroup>
    )
  }
  