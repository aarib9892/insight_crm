import { Card } from "@/components/ui/card";
import { fetchModelsData } from "@/helpers/api";
import React from "react";

const page = async () => {
  let modelsData = await fetchModelsData();
  return (
    <div className="flex justify-between w-[70%] mx-auto">
      {modelsData.map((val, key) => (
        <Card className='w-[40%] py-12 px-4 flex flex-col gap-2' key={key}>
          <h1 className="text-2xl font-bold text-primary">{val.model_name}</h1>
          <h3>Silhouette Score:{val.silhouette_score}</h3>
          <h3>Davies Bouldin Index:{val.davies_bouldin_index}</h3>
          <h3>Calinski Harabasz Index:{val.calinski_harabasz_index}</h3>
        </Card>
      ))}
    </div>
  );
};

export default page;
