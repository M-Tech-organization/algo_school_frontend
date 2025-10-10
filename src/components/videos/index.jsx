import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  "https://youtu.be/BBvod49uySQ?si=uX_Vfj91nuad1dBm",
  "https://youtu.be/v5PZw1Wr-l0?si=_g-WIax0iGUYBjn1",
  "https://youtu.be/HI6gMkfRjE0?si=JGnSaceqCZUSvRFO",
  "https://youtu.be/oiKj0Z_Xnjc?si=P_ADpnATfvNUB7Xt",
  "https://youtu.be/-pF7Af2xAuQ?si=c4UsxL9-gfvuWeGj",
  "https://youtu.be/cDNDVtoJhik?si=iuhKOuseAV54cy76",
];

const convertToEmbed = (url) => {
  return url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
};

const Videos = () => {
  const [midIndex, setMidIndex] = useState(0);
  const [leftIndex, setLeftIndex] = useState(videos.length - 1);
  const [rightIndex, setRightIndex] = useState(1);

  useEffect(() => {
    if (midIndex === 0) {
      setLeftIndex(videos.length - 1);
      setRightIndex(1);
    } else if (midIndex === videos.length - 1) {
      setLeftIndex(midIndex - 1);
      setRightIndex(0);
    } else {
      setLeftIndex(midIndex - 1);
      setRightIndex(midIndex + 1);
    }
  }, [midIndex]);

  const nextVideo = () => {
    setMidIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setMidIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="ImageSlider max-w-[1000px] mx-auto">
      <h3 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent flex-shrink-0">
        Videos
      </h3>

      {/* Tugmalar */}
      <div className="buttons mb-[50px] flex justify-end items-center gap-5 w-full mt-[50px] -translate-y-[5px]">
        <button className="leftButton" onClick={prevVideo}>
          <ArrowLeft size={30} />
        </button>
        <button className="rightButton" onClick={nextVideo}>
          <ArrowRight size={30} />
        </button>
      </div>

      <div className="ImageSliderContainer mb-[20px] flex justify-center items-center gap-4">
        {/* Chap video */}
        <iframe
          src={convertToEmbed(videos[leftIndex])}
          className="leftImage w-[200px] h-[120px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        {/* O‘rtadagi katta video */}
        <iframe
          src={convertToEmbed(videos[midIndex])}
          className="middleImage w-[600px] h-[340px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        {/* O‘ng video */}
        <iframe
          src={convertToEmbed(videos[rightIndex])}
          className="rightImage w-[200px] h-[120px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dots */}
      <div className="dotsPlace flex justify-center gap-2 mt-5">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              midIndex === index ? "bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]" : "bg-gray-400"
            }`}
            onClick={() => setMidIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
