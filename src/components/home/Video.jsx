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
        src={"https://my-portfolio-resources-v1.s3.ap-south-1.amazonaws.com/bgin.mp4"}
      />
    </div>
  );
};

export default Video;
