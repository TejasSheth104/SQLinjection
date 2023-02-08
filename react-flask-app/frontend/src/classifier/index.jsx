import React, { useEffect, useRef, useState } from "react";

const Classifier = () => {
  // const canvasRef = useRef();
  // const imageRef = useRef();
  // const videoRef = useRef();

  const [result, setResult] = useState("");

  // useEffect(() => {
  //   async function getCameraStream() {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       audio: false,
  //       video: true,
  //     });

  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //     }
  //   }

  //   getCameraStream();
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     captureImageFromCamera();

  //     if (imageRef.current) {
  //       const formData = new FormData();
  //       formData.append("image", imageRef.current);

  //       const response = await fetch("/classify", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.status === 200) {
  //         const text = await response.text();
  //         setResult(text);
  //       } else {
  //         setResult("Error from API.");
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const playCameraStream = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  // const captureImageFromCamera = () => {
  //   const context = canvasRef.current.getContext("2d");
  //   const { videoWidth, videoHeight } = videoRef.current;

  //   canvasRef.current.width = videoWidth;
  //   canvasRef.current.height = videoHeight;

  //   context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

  //   canvasRef.current.toBlob((blob) => {
  //     imageRef.current = blob;
  //   });
  // };

  return (
    <>
      {/* <header>
        <h1>Camera</h1>
      </header> */}
      <main>
        {/* <video ref={videoRef} onCanPlay={() => playCameraStream()} id="video" />
        <canvas ref={canvasRef} hidden></canvas>
        <p>Currently seeing: {result}</p> */}
        <form action="/predict" method="POST">
          <div class="box">
            <span class="text-center">
              Detection of SQL Injection Attack using Machine Learning
              Approaches
            </span>
            <div class="input-container">
              {/* <textarea name="query" placeholder="Enter Query - "></textarea> */}
              {/* <input type="submit" value="Predict"></input> */}
              <input
                type="text"
                name="query"
                required="required"
                placeholder="Enter Query - "
              ></input>
              {/* <label>Enter Query - </label> */}
            </div>
            <div>
              <button type="submit" class="btn">
                Test Injection
              </button>
              {/* <button type="submit" class="btn">
                Reset Model
              </button> */}
            </div>
            <p>Result - {result}</p>
          </div>
        </form>
      </main>
    </>
  );
};

export default Classifier;
