import partner1 from "../../../../assets/partner1.png";
import partner2 from "../../../../assets/partner2.png";
import partner3 from "../../../../assets/partner3.png";
import partner4 from "../../../../assets/partner4.png";
import partner5 from "../../../../assets/partner5.png";
import { Carousel } from "antd";

const Partner = () => {
  const images = [partner1, partner2, partner3, partner4, partner5];

  return (
    <div className="w-full py-5 relative">
      <Carousel
        autoplay
        dots
        infinite
        autoplaySpeed={2500}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
          },
        ]}
      >
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <img
              src={img}
              alt={`partner-${index}`}
              style={{
                width: "180px",
                height: "130px",
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partner;
