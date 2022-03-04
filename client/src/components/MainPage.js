import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WebcamCapture from "./Webcam";

export default function MainPage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/InventoryCategory";
    navigate(path);
  };
  const routeChange1 = () => {
    let path1 = "/Webcam";
    navigate(path1);
  };
  return (
    <div>
      <div>MainPage</div>
      <h3>Welcome to inventory</h3>
      <button onClick={routeChange}>Create new inventory</button>
      <button onClick={routeChange1}>Go to camera ( test ) </button>
    </div>
  );
}
