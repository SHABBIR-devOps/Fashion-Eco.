import React from "react";
import { useVirtualTryOn } from "../../hooks/useVirtualTryOn";
import Loader from "../common/Loader";
import Button from "../common/Button";
import CompareSlider from "./CompareSlider";
import DownloadResult from "./DownloadResult";

export default function TryOnPreview() {
  const { photoUrl, selectedProduct, resultUrl, status, generate, saveLook } = useVirtualTryOn();

  if (!photoUrl || !selectedProduct) {
    return (
      <div className="border border-line p-10 text-center text-sm text-ink-soft font-body">
        Upload a photo and choose a piece to see your preview here.
      </div>
    );
  }

  return (
    <div className="border border-line p-6">
      {status === "generating" ? (
        <Loader label="Rendering your try-on" />
      ) : resultUrl ? (
        <>
          <CompareSlider before={photoUrl} after={resultUrl} />
          <div className="flex gap-3 mt-5">
            <Button variant="accent" onClick={saveLook}>Save this look</Button>
            <DownloadResult imageUrl={resultUrl} />
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <p className="font-body text-sm text-ink-soft mb-4">Ready when you are.</p>
          <Button onClick={generate}>Generate try-on</Button>
        </div>
      )}
    </div>
  );
}
