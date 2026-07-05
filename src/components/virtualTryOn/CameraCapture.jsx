import React, { useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import { useVirtualTryOn } from "../../hooks/useVirtualTryOn";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);
  const { setPhoto } = useVirtualTryOn();

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setActive(true);
      setError(null);
    } catch {
      setError("Camera access was denied or isn't available on this device.");
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setActive(false);
  }

  function capture() {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    setPhoto(canvas.toDataURL("image/png"));
    stopCamera();
  }

  return (
    <div className="border border-line p-6 text-center">
      {active ? (
        <div className="space-y-4">
          <video ref={videoRef} autoPlay playsInline className="w-full max-h-72 object-contain bg-black" />
          <div className="flex justify-center gap-3">
            <button onClick={capture} className="font-mono text-xs tracking-wide px-4 py-2 bg-ink text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
              Capture
            </button>
            <button onClick={stopCamera} className="font-mono text-xs tracking-wide px-4 py-2 border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Cancel">
              <X size={14} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <Camera size={28} className="mx-auto mb-3 text-ink-soft" />
          <p className="font-body text-sm text-ink-soft mb-4">Or use your camera for a live capture instead.</p>
          <button onClick={startCamera} className="font-mono text-xs tracking-wide px-4 py-2 border border-ink hover:bg-ink hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
            Open camera
          </button>
          {error && <p className="text-clay text-xs font-body mt-3">{error}</p>}
        </>
      )}
    </div>
  );
}
