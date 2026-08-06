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
        src={"/intro.mp4"}
      />
    </div>
  );
};

export default Video;
