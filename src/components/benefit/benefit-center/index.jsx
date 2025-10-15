import benefit2 from "../../../assets/benefit2.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Partner from "./partner";

const videos = [
  "https://youtu.be/BBvod49uySQ?si=uX_Vfj91nuad1dBm",
  "https://youtu.be/v5PZw1Wr-l0?si=_g-WIax0iGUYBjn1",
  "https://youtu.be/HI6gMkfRjE0?si=JGnSaceqCZUSvRFO",
  "https://youtu.be/oiKj0Z_Xnjc?si=P_ADpnATfvNUB7Xt",
  "https://youtu.be/-pF7Af2xAuQ?si=c4UsxL9-gfvuWeGj",
  "https://youtu.be/cDNDVtoJhik?si=iuhKOuseAV54cy76",
];

const convertToEmbed = (url) => {
  const videoId = url.split("/").pop().split("?")[0];
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;
};

const BenefitCenter = () => {
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
    <div
      className="w-full min-h-[994px] xs:min-h-[420px] sm:min-h-[465px] relative flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[40px] sm:py-[150px]"
      style={{
        backgroundImage: `url(${benefit2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="ImageSlider max-w-[1000px] mx-auto px-4 ">
        <Partner />

        {/* Tugmalar */}
        <div className="buttons mb-[50px] flex justify-end items-center gap-5 w-full -translate-y-[5px]">
          <button
            aria-label="leftButton"
            className="leftButton"
            onClick={prevVideo}
          >
            <ArrowLeft size={30} />
          </button>
          <button
            aria-label="leftButton"
            className="rightButton"
            onClick={nextVideo}
          >
            <ArrowRight size={30} />
          </button>
        </div>

        <div className="ImageSliderContainer mb-[20px] flex justify-center items-center gap-4">
          <iframe
            loading="lazy"
            title="Previous video preview"
            src={convertToEmbed(videos[leftIndex])}
            className="leftImage aspect-video w-[200px] h-[120px]"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <iframe
            loading="lazy"
            title="Main video player"
            src={convertToEmbed(videos[midIndex])}
            className="middleImage aspect-video w-[600px] h-[340px]"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <iframe
            loading="lazy"
            title="Next video preview"
            src={convertToEmbed(videos[rightIndex])}
            className="rightImage aspect-video w-[200px] h-[120px]"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default BenefitCenter;
