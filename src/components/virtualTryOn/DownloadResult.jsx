import React from "react";
import { Download } from "lucide-react";
import Button from "../common/Button";

export default function DownloadResult({ imageUrl }) {
  return (
    <a href={imageUrl} download="forme-try-on.png">
      <Button variant="outline">
        <Download size={14} /> Download
      </Button>
    </a>
  );
}
