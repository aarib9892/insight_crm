
import { fetchAnalyticsData, getIncomeLevel } from "@/helpers/api";
import React  from "react";
import { AppBarChart } from "./AppBarChart";
import { AppPieChart } from "./AppPieChart";
import { AppLineChart } from "./AppLineChart";
const Analytics = ({income_levels ,product_month, regions}) => {
   

  return (
    <>
      <div className="min-h-[80vh] gap-y-10 flex-wrap w-full mb-10 flex justify-around items-center">
        <AppPieChart incomeLevels={income_levels} />
        <AppBarChart regions={regions} />
        <AppLineChart product_month ={product_month}/>
      </div>
    </>
  );
};

export default Analytics;
