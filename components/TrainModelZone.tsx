"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface ImageUploadFormProps {
  packSlug: string;
}

export default function ImageUploadForm({ packSlug }: ImageUploadFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [modelType, setModelType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles: File[]) => {
    const validTypes = newFiles.every(
      (file) => file.type === "image/png" || file.type === "image/jpeg"
    );
    const validCount = newFiles.length + files.length <= 10;

    if (!validTypes) {
      setErrorMessage("Only PNG and JPEG files are allowed.");
      return;
    }

    if (!validCount) {
      setErrorMessage("You can upload a maximum of 10 images.");
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setErrorMessage(null);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!files.length) {
      setErrorMessage("Please upload at least 4 images.");
      return;
    }

    if (!modelType) {
      setErrorMessage("Please select a model type.");
      return;
    }

    if (files.length < 4) {
      setErrorMessage("Please upload at least 4 images.");
      return;
    }

    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Form submitted successfully!");
    }, 2000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">
          Upload Images and Train Model
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed rounded-lg p-4 relative">
          <div
            className="text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}>
            <p className="text-gray-500">Drag & drop images here, or</p>
            <Button variant="outline" className="mt-2">
              <Input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />
              Select Images
            </Button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24 object-cover"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  onClick={() => handleRemoveFile(index)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="model-type" className="text-lg font-semibold">
            Select Model Type
          </Label>
          <RadioGroup
            defaultValue="man"
            className="mt-2"
            value={modelType || undefined}
            onValueChange={setModelType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="man" id="man" />
              <Label htmlFor="man">Man</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="woman" id="woman" />
              <Label htmlFor="woman">Woman</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unisex" id="unisex" />
              <Label htmlFor="unisex">Unisex</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-4">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
        {successMessage && (
          <p className="text-green-500 mt-2">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </CardContent>
    </Card>
  );
}
