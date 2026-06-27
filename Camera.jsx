import { useRef } from "react";

export default function Camera({ day, entries, setEntries }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const snap = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    const updated = {
      ...entries,
      [day]: { ...entries[day], image }
    };

    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <button onClick={startCamera}>Camera</button>
      <button onClick={snap}>Snap</button>
    </div>
  );
}
