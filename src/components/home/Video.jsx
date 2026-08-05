import React from "react";

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover"
        muted
        loop
        autoPlay
        playsInline
        src={"./homevid.mp4"}
      />
    </div>
  );
};

export default Video;
