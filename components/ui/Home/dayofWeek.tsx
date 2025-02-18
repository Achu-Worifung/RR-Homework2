"use client";
import {Button} from "@/components/ui/button"
import { Label } from "@radix-ui/react-label";

export default function DayOfWeek()
{
    const curr_day = new Date().getDay()
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    return (
        <div>
            <Label className="text-2xl bold">Ready for {days[curr_day]} workout?</Label><br />
            {days.map((day, index) => (
                <Button key={index} className="w-20 h-20 m-2" onClick={() =>console.log(day)}>
                    {day}
                </Button>
            ))}
        </div>
    )
}