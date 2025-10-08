import guarantee from "../../assets/guarantee.png";
import quality from "../../assets/quality.png";
const Guarantee = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-[100px] text-center flex flex-col gap-[40px] items-center">
      <img src={quality} alt="Image" className="max-w-[378px] w-full h-auto"/>
      <h3 className="uppercase text-[#262626] text-[54px] font-semibold mb-[62px]">
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          “Ko'zlarimga ishonmayman”
        </span>{" "}
        Nomli Kafolat
      </h3>

      <img className="w-full h-auto" src={guarantee} alt="Image" />
    </div>
  );
};

export default Guarantee;
