"use client";

import { Label } from "@radix-ui/react-label";
import { useParams } from "next/navigation";
import {LChart} from "@/components/ui/LChart";
import BChart from "@/components/ui/BChart";
import DisplayInfo from "@/components/ui/DisplayInfo";

export default function UserDash() {
  const params = useParams();
  const id = params?.id;

  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const lchartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const data_min = Math.min(...chartData.map((item) => item.desktop));
  const min_month =
    chartData.find((item) => item.desktop === data_min)?.month || "";

  const data_max = Math.max(...chartData.map((item) => item.desktop));
  const max_month =
    chartData.find((item) => item.desktop === data_max)?.month || "";

  const line_min = Math.min(...lchartData.map((item) => item.visitors));
  const line_max = Math.max(...lchartData.map((item) => item.visitors)) || "";
  const min_bro = lchartData.find(
    (item) => item.visitors === line_min
  )?.browser;
  const max_bro =
    lchartData.find((item) => item.visitors === line_max)?.browser || "";

  return (
    <section className="space-y-4 flex justify-center items-center flex-col pb-5">
      <Label className="text-2xl font-bold w-full text-left ">
        Dashboard user {id}
      </Label>
      <BChart data={chartData} />
      <Label className="text-2xl font-bold pt-2">Data insight</Label>
      <DisplayInfo
        max_val={data_max}
        min_val={data_min}
        max_name={max_month}
        min_name={min_month}
      />
      <LChart chartData={lchartData} />
      <Label className="text-2xl font-bold pt-2">Data insight</Label>
      <DisplayInfo
        max_val={Number(line_max)}
        min_val={line_min}
        max_name={max_bro}
        min_name={String(min_bro)}
      />{" "}
    </section>
  );
}
