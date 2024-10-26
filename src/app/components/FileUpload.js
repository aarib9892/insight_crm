/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aDFucFbMyb8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function FileUpload() {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first file
    setFile(selectedFile); // Update the state with the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("uploaded_file", file, file.name); // Append the file to form data

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/predict/upload",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            // No need to set Content-Type for FormData
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Handle the response data as needed
      alert('File Uploaded Succcessfully')
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2 text-sm">
            <Label htmlFor="file" className="text-sm font-medium">
              File
            </Label>
            <Input
              id="file"
              type="file"
              onChange={handleFileChange}
              placeholder="File"
              accept="csv"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="lg">
            Upload
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
