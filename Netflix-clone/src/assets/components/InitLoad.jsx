import React, { useState, useEffect } from "react";

const initLoad = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); //1 secondo di caricamento
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "221F1F",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "80px",
            height: "80px",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                boxSizing: "border-box",
                display: "block",
                position: "absolute",
                width: "64px",
                height: "64px",
                margin: "8px",
                border: "8px solid red",
                borderRadius: "50%", 
                animation: "loader-spin 1.2s linear infinite",
                borderColor: "red transparent transparent transparent", 
                animationDelay: `${-0.15 * i}s`, 
              }}
            ></div>
          ))}
        </div>
        <style>
          {`
            @keyframes loader-spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    );
  }

};

export default initLoad;
