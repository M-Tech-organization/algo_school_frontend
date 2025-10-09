import result from "../../assets/result.png";
import results from "../../assets/results.webp";

const Result = () => {
  return (
    <div className="relative text-center my-[100px] px-4">
      <h3 className="text-[#262626]  text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold mb-6 leading-[1.1]">
        Result
      </h3>

      <div className="relative w-full max-w-[1000px] mx-auto">
        {/* Pastdagi rasm */}
        <img
          src={result}
          alt="Result Background"
          className="w-full h-auto object-contain"
        />

        {/* Ustidagi rasm */}
        <img
          src={results}
          alt="Result Overlay"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] md:w-[800px] h-auto object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Result;
