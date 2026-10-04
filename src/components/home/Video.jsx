import React from "react";

const Video = ({ className = "" }) => {
  return (
    <div className="w-full h-full">
      <video
        className={`w-full h-full object-cover ${className}`}
        muted
        loop
        autoPlay
        playsInline
        src={"https://my-portfolio-assets-v1.s3.eu-north-1.amazonaws.com/BG_Portfolio.mp4"}
      />
    </div>
  );
};

export default Video;
