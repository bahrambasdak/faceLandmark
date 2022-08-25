import * as tf from "@tensorflow/tfjs";

import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import { useRef } from "react";
import Webcam from "react-webcam";
import { drowMesh } from "./utilities";

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runFaceMesh = async () => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
      runtime: "mediapipe", // or 'tfjs'
      solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
    };
    const net = await faceLandmarksDetection.createDetector(
      model,
      detectorConfig
    );
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current.video !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeigth = video.videoHeigth;
      canvasRef.current.width = videoWidth;
      canvasRef.current.heigth = videoHeigth;
      const face = await net.estimateFaces(video);
      console.log(face);

      const ctx = canvasRef.current.getContext('2d');
      drowMesh(face,ctx);
    }
  };

  runFaceMesh();

  return (
    <div className="app">
      <Webcam ref={webcamRef} className="webcam" />
      <canvas ref={canvasRef} className="canvas"></canvas>
    </div>
  );
};

export default App;
