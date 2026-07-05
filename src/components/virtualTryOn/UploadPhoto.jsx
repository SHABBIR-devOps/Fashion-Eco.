import React, { useRef } from "react";
import { Upload } from "lucide-react";
import { readFileAsDataUrl } from "../../utils/uploadImage";
import { useVirtualTryOn } from "../../hooks/useVirtualTryOn";

export default function UploadPhoto() {
  const inputRef = useRef(null);
  const { photoUrl, setPhoto } = useVirtualTryOn();

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setPhoto(dataUrl);
  }

  return (
    <div className="border border-dashed border-line p-6 text-center">
      {photoUrl ? (
        <img src={photoUrl} alt="Your uploaded photo" className="mx-auto max-h-72 object-contain mb-4" />
      ) : (
        <Upload size={28} className="mx-auto mb-3 text-ink-soft" />
      )}
      <p className="font-body text-sm text-ink-soft mb-4">
        {photoUrl ? "Looking good — pick a piece to try on." : "Upload a full-length photo, front-facing, in fitted clothing."}
      </p>
      <button
        onClick={() => inputRef.current?.click()}
        className="font-mono text-xs tracking-wide px-4 py-2 border border-ink hover:bg-ink hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
      >
        {photoUrl ? "Replace photo" : "Choose a photo"}
      </button>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}
