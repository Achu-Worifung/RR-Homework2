import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function BChart({ data }: { data: { month: string; desktop: number }[] }) {
  return (
    <Card className="w-full  max-w-2xl">
      <CardHeader>
        <CardTitle>Desktop Sales</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data} width={500} height={300}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              label={{
                value: "Month",
                position: "insideBottom", 
                dy: 10, // Adjust vertical positioning
                style: { fontSize: 14, fontWeight: "bold" },
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              label={{
                value: "Desktop Sales",
                angle: -90,
                position: "insideMiddle", // Inside graph
                dx: -10, // Adjust horizontal positioning
                style: { fontSize: 14, fontWeight: "bold" },
              }}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="month" />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
