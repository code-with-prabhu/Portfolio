import {
  ExpressJs,
  Aws,
  Java,
  Python,
  Mongodb,
  Nodejs,
  Github,
  Javascript,
  Database,
} from "@boxicons/react";
// --- DATA ARRAYS ---

const allTechItems = [
  { name: "Java", icon: <Java />, hoverBg: "hover:bg-[#f89820]" }, // Java Orange
  { name: "Python", icon: <Python />, hoverBg: "hover:bg-[#FFE873]" }, // Python Yellow
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill={"currentColor"}
        viewBox={"0 0 24 24"}
      >
        {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
        <path d="M12 9.46a1.785 1.785 0 1 0 0 3.57 1.785 1.785 0 1 0 0-3.57M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452S3.674 8.53 6.607 7.789l.395-.1.111.391a19.5 19.5 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54q.41-1.304.985-2.54a20 20 0 0 1-.985-2.542m10.572 6.095-.11-.392a19.6 19.6 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453s-1.683 2.711-4.617 3.452zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a21 21 0 0 1-.987 2.542" />
        <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a20 20 0 0 0-2.02 2.474l-.113.162-.196.016a19.7 19.7 0 0 0-3.157.509zm1.582-5.529q-.337 0-.589.145c-.828.477-.974 2.138-.404 4.38q1.337-.297 2.696-.417a21 21 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985m7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a20 20 0 0 0 2.021-2.477l.112-.16.194-.019a19.5 19.5 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a2 2 0 0 1-1.005.257m-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986q.339-.001.589-.145c.829-.478.976-2.142.404-4.384q-1.335.299-2.698.419a20.5 20.5 0 0 1-1.71 2.124" />
        <path d="m17.58 8.695-.395-.099a19.5 19.5 0 0 0-3.158-.509l-.194-.017-.112-.162A19.6 19.6 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841q.926 1.005 1.71 2.123M8.001 20.15a2 2 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522m-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21 21 0 0 1-1.713-2.123 21 21 0 0 1-2.696-.419" />
        <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a26 26 0 0 1-1.126-1.769 26 26 0 0 1-.971-1.859l-.084-.177.084-.179q.448-.948.971-1.858c.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25 25 0 0 1 4.198 0l.194.019.113.16a25 25 0 0 1 2.1 3.628l.083.179-.083.177a25 25 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087m-1.834-.904c1.235.093 2.433.093 3.667 0a24.5 24.5 0 0 0 1.832-3.168 24 24 0 0 0-1.832-3.168 24 24 0 0 0-3.667 0 24 24 0 0 0-1.832 3.168 25 25 0 0 0 1.832 3.168" />
      </svg>
    ),
    hoverBg: "hover:bg-[#61DAFB]",
  }, // React Blue
  { name: "Express", icon: <ExpressJs />, hoverBg: "hover:bg-[#e5e7eb]" }, // Light Gray
  { name: "MongoDB", icon: <Mongodb />, hoverBg: "hover:bg-[#47A248]" }, // MongoDB Green
  { name: "Node", icon: <Nodejs />, hoverBg: "hover:bg-[#339933]" }, // Node Green
  { name: "Github", icon: <Github />, hoverBg: "hover:bg-[#d1d5db]" }, // Github Gray
  { name: "Javascript", icon: <Javascript />, hoverBg: "hover:bg-[#F7DF1E]" }, // JS Yellow
  { name: "MySQL", icon: <Database />, hoverBg: "hover:bg-[#87d3e6]" }, // MySQL Light Blue
  { name: "AWS", icon: <Aws />, hoverBg: "hover:bg-[#FF9900]" }, // AWS Orange
];

// --- 8x2 GRID MAPPING FOR DESKTOP ---
// Row 1: 1 blank | 6 items | 1 blank
// Row 2: 2 blanks | 4 items | 2 blanks
const desktopGrid = [
  null,
  allTechItems[0],
  allTechItems[1],
  allTechItems[2],
  allTechItems[3],
  allTechItems[4],
  allTechItems[5],
  null,
  null,
  null,
  allTechItems[6],
  allTechItems[7],
  allTechItems[8],
  allTechItems[9],
  null,
  null,
];

// --- MAIN COMPONENT ---
const LanguageStackSection = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center font-[font1] mb-5 text-black ">
      {/* Outer wrapper without borders */}
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 md:p-16 lg:p-24 border-[#c9c9c4] bg-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[font2] font-bold tracking-tight w-full lg:w-1/2">
            Building
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            with your stack
          </h2>
          <p className="text-lg md:text-xl w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-16 leading-relaxed text-gray-900 font-medium">
            I write clean code that naturally fits the frameworks your team
            already loves. From launching web apps to building smart systems in
            the cloud, I adapt to your stack.
          </p>
        </div>

        {/* --- DESKTOP GRID (Hidden on mobile/tablet) --- */}
        <div className="hidden lg:grid grid-cols-8 bg-white border-1 border-[#c9c9c4]">
          {desktopGrid.map((item, index) => {
            const isBottomRow = index >= 8;
            const isLastInRow = (index + 1) % 8 === 0;

            return (
              <div
                key={index}
                className={`
                  flex flex-col items-center justify-center p-6 min-h-[160px] border-[#c9c9c4] 
                  ${!isBottomRow ? "border-b" : ""} 
                  ${!isLastInRow ? "border-r" : ""}
                  ${item ? item.hoverBg : ""} 
                  transition-colors duration-300 cursor-pointer
                `}
              >
                {item && (
                  <>
                    <div className="h-10 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                      {item.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE / TABLET GRID (Hidden on Desktop) --- */}
        <div className="grid lg:hidden grid-cols-2 md:grid-cols-4 bg-white border-b border-[#c9c9c4]">
          {allTechItems.map((item, index) => {
            // Determine border classes safely for smaller screens
            const isMobileRightEdge = (index + 1) % 2 === 0;
            const isTabletRightEdge = (index + 1) % 4 === 0;
            const isBottomRow = index >= 8; // Because there are 10 items total

            return (
              <div
                key={item.name}
                className={`
                  flex flex-col items-center justify-center p-6 min-h-[140px] border-[#c9c9c4]
                  ${!isBottomRow ? "border-b" : ""}
                  border-r
                  ${isMobileRightEdge ? "max-md:border-r-0" : ""}
                  ${isTabletRightEdge ? "md:border-r-0" : ""}
                  ${item.hoverBg}
                  transition-colors duration-300 cursor-pointer
                `}
              >
                <div className="h-10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageStackSection;
