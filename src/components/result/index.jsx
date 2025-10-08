import result from "../../assets/result.png";
import results from "../../assets/results.webp";

const Result = () => {
  return (
    <div className="max-w-[1000px] mx-auto relative text-center my-[100px] px-4">
      <h3 className="text-[#262626] text-[54px] font-semibold mb-6">Result</h3>

      <div className="relative w-full">
        {/* Pastdagi rasm */}
        <img
          src={result}
          alt="Result Background"
          className="w-full object-cover"
        />

        {/* Ustidagi rasm — X va Y bo‘yicha markazda */}
        <img
          src={results}
          alt="Result Overlay"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-auto object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Result;
