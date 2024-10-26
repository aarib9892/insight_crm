import Image from "next/image";
import { AppPieChart } from "./components/AppPieChart";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AppBarChart } from "./components/AppBarChart";
import { AppLineChart } from "./components/AppLineChart";
import Analytics from "./components/Analytics";
import { fetchAnalyticsData, getIncomeLevel, getProductTrend, getRegion } from "@/helpers/api";

export default async function Home() {
  let datas = await fetchAnalyticsData()
  let income_levels = getIncomeLevel(datas.income_level)
  let regions = getRegion(datas.region)
  let product_month = getProductTrend(datas.product_month) 

  return (
    <div>
      page
    </div>
  )
}
