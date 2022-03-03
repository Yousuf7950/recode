import React from "react";
import Webcam from "react-webcam";
import Axios from "axios";
export default function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  console.log({ imgSrc });

  const submitImage = () => {
    Axios.post("http://localhost:5000/postImages", {
      imagee1: imgSrc,
    }).then(() => {});
  };

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
      <button onClick={submitImage}>Save image</button>
    </>
  );
}
