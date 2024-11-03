"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

const chartConfig = {
  total: {
    label: "Total Revenue",
    color: "hsl(var(--primary))"
  }
}

export function Overview() {
  const formatter = (value: ValueType, name: NameType) => {
    return [`$${value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, "Revenue"]
  }

  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        <ChartTooltip
          content={({ active, payload }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              formatter={formatter}
            />
          )}
        />
      </BarChart>
    </ChartContainer>
  )
}