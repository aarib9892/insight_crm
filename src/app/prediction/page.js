import { fetchPredictDetails } from "@/helpers/api";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const page = async () => {
  let data = await fetchPredictDetails();
  return (
    <div className="flex justify-between items-start mx-auto mt-[4rem] w-[70%]">
      <div className="files_div border-2 rounded-xl p-8">
        <h1 className="text-2xl my-8">Files Uploaded</h1>
        <RadioGroup defaultValue="option-one">
          {data.files.map((file, key) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={file} id="option-one" />
              <Label htmlFor="option-one">{file}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="files_div border-2 rounded-xl p-8">
        <h1 className="text-2xl my-8">Files Uploaded</h1>
        <RadioGroup defaultValue="option-one">
          {data.models.map((file, key) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={file} id="option-one" />
              <Label htmlFor="option-one">{file}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default page;
