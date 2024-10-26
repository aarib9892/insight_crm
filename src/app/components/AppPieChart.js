"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart , LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a custom label"

const chartData = [
  { class: "chrome", count: 275, fill: "var(--color-chrome)" },
  { class: "safari", count: 200, fill: "var(--color-safari)" },
  { class: "firefox", count: 187, fill: "var(--color-firefox)" },
  { class: "edge", count: 173, fill: "var(--color-edge)" },
  { class: "other", count: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  count: {
    label: "count",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} 

export function AppPieChart({incomeLevels}) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Income Levels</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[40vh] max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="count" hideLabel />}
            />
            <Pie
              data={incomeLevels}
              dataKey="count"
              labelLine={true}

              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.count}
                  </text>
                )
              }}
              nameKey="class"
            ><LabelList
                dataKey="class"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) =>
                  value
                }
              /></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total count for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  )
}
