import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import Analytics from "../components/Analytics";
import {
  fetchAnalyticsData,
  getIncomeLevel,
  getProductTrend,
  getRegion,
} from "@/helpers/api";

export default async function page() {
  let datas = await fetchAnalyticsData();
  let income_levels = getIncomeLevel(datas.income_level);
  let regions = getRegion(datas.region);
  let product_month = getProductTrend(datas.product_month);

  return (
    <main className="flex min-h-screen  w-full  min-w-full flex-col items-center justify-between pb-0">
      <Analytics
        product_month={product_month}
        datas={datas}
        income_levels={income_levels}
        regions={regions}
      />

      {/* <div className=" sticky dark:bg-background px-10 bottom-0 min-w-full">
        <div className="relative">
          <Search className="absolute left-[1%] top-1/2 translate-y-[-50%]" />
          <Input
            placeholder="Type Something..."
            type="text"
            className=" border-2 py-6 pl-[3rem] text-xl min-w-full my-4 rounded-full"
          />
        </div>
      </div> */}
    </main>
  );
}
