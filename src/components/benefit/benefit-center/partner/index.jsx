// import { useRef } from "react";
// import partner1 from "../../../../assets/partner1.png";
// import partner2 from "../../../../assets/partner2.png";
// import partner3 from "../../../../assets/partner3.png";
// import partner4 from "../../../../assets/partner4.png";
// import partner5 from "../../../../assets/partner5.png";
// import { Carousel } from "antd";

// const Partner = () => {
//   const images = [partner1, partner2, partner3, partner4, partner5];

//   // 👉 Carouselni boshqarish uchun ref
//   const carouselRef = useRef(null);

//   return (
//     <div className="w-full py-5 relative">
//       <Carousel
//         ref={carouselRef}
//         autoplay
//         dots
//         infinite
//         autoplaySpeed={2500}
//         slidesToShow={5}
//         slidesToScroll={1}
//         responsive={[
//           {
//             breakpoint: 1024,
//             settings: { slidesToShow: 3 },
//           },
//           {
//             breakpoint: 600,
//             settings: { slidesToShow: 2 },
//           },
//           {
//             breakpoint: 480,
//             settings: { slidesToShow: 1 },
//           },
//         ]}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="flex justify-center items-center w-full cursor-pointer"
//             onClick={() => carouselRef.current?.next()} // 👈 rasm bosilganda keyingi slaydga o'tadi
//           >
//             <img
//               loading="load"
//               src={img}
//               alt={`partner-${index}`}
//               style={{
//                 width: "180px",
//                 height: "130px",
//                 objectFit: "contain",
//                 borderRadius: "8px",
//               }}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Partner;

import { useRef } from "react";
import partner1 from "../../../../assets/partner1.png";
import partner2 from "../../../../assets/partner2.png";
import partner3 from "../../../../assets/partner3.png";
import partner4 from "../../../../assets/partner4.png";
import partner5 from "../../../../assets/partner5.png";
import { Carousel } from "antd";

const Partner = ({ onImageClick }) => {
  const images = [partner1, partner2, partner3, partner4, partner5];
  const carouselRef = useRef(null);

  return (
    <div className="w-full py-5 relative max-w-[1000px] mx-auto">
      <Carousel
        ref={carouselRef}
        autoplay
        dots
        infinite
        autoplaySpeed={2500}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 600, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full cursor-pointer"
            onClick={() => onImageClick(index)}  
          >
            <img
              src={img}
              alt={`partner-${index}`}
              style={{
                width: "180px",
                height: "130px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partner;
