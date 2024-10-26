"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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

export const description = "A bar chart with a label"

const chartData = [
  { state: "January", count: 186 },
  { state: "February", count: 305 },
  { state: "March", count: 237 },
  { state: "April", count: 73 },
  { state: "May", count: 209 },
  { state: "June", count: 214 },
]

const chartConfig = {
  count: {
    label: "count",
    color: "hsl(var(--chart-1))",
  },
} 

export function AppBarChart({regions}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Sales</CardTitle>
        {/* <CardDescription>January -  December 2023</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer className='min-h-[30vh]' config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={regions}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="state"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this state <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
          
        </div>
      </CardFooter>
    </Card>
  );
}
