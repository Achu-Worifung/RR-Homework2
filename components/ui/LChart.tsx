"use client"

import { CartesianGrid, Dot, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export  function LChart({ chartData }: { chartData: { browser: string, visitors: number, fill: string }[] }) {
  return (
    <Card className="w-full  max-w-2xl">
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 24, left: 24, right: 24, bottom: 24 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis dataKey="browser" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent indicator="line" nameKey="browser" />
              }
            />

            <Line
              dataKey="visitors"
              type="monotone"
              stroke={chartConfig.visitors.color}
              strokeWidth={2}
              dot={({ payload, cx, cy }) => (
                <Dot
                  key={payload.browser}
                  r={5}
                  cx={cx}
                  cy={cy}
                  fill={payload.fill}
                  stroke={payload.fill}
                />
              )}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
