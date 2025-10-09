import { useEffect, useRef } from "react";

const images = {
  column1: [
    "https://th.bing.com/th/id/R.f171e004dc51b097c0c67a97e9c63260?rik=DrCCa6bmYw8Q6A&riu=http%3a%2f%2fimg.hipertextual.com%2fcontent%2fimages%2fsystem%2fhome_cover_1487382543596_2cf9e3.jpg&ehk=SdOAQW1W%2bLlFWYLPr3XE%2fyWE4s6pXVm%2fO6dOx%2bQdAAM%3d&risl=&pid=ImgRaw&r=0",
    "https://ssl.cdn-redfin.com/photo/107/bigphoto/745/F10327745_0.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.-i8FQs4Q8GnnrQ2As-zefwHaE8?cb=12&w=2048&h=1367&rs=1&pid=ImgDetMain&o=7&rm=3",
  ],
  column2: [
    "https://cruisepanda.com/storage/ports/K4xN9uNIStPH6yoASZcyl8TSziLJQiovgltFAG3H.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.6jZvHXWnXhXLTO9lfhpDiQHaE-?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://s1.1zoom.me/big0/16/193345-foxixol.jpg",
  ],
  column3: [
    "https://i.ytimg.com/vi/pkiiD4Xwm78/maxresdefault.jpg",
    "https://cdn.pixabay.com/photo/2021/10/25/17/16/nature-6741602_960_720.jpg",
    "https://th.bing.com/th/id/R.df2ff2ce40a990b47870a93ca47870a93ca47849ce?rik=uO0aXncYa13eUw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-AmCjK-g_Qfk%2fUVKu87v55lI%2fAAAAAAAAECU%2fLHZGYgJhWZw%2fs1600%2fnature-wallpaper-23.jpg&ehk=dWXQ35Xfbo0N55zCtFKc9rq1dFEB9IBNv%2fWMHkKoFSI%3d&risl=&pid=ImgRaw&r=0",
  ],
};

const IMAGE_WIDTH = "w-[140px] sm:w-[290px]"; // Mobile: 140px, Desktop: 290px
const IMAGE_HEIGHT = "h-[100px] sm:h-[280px]"; // Mobile: 180px, Desktop: 280px
const CONTAINER_HEIGHT = "h-[560px] sm:h-[880px]"; // Mobile: 3 rasm vertical

const ColumnSlider = ({ images, speed = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let y = 0;
    let requestId;

    const totalHeight = container.scrollHeight / 3; // 3 martaga duplicate qilingan

    const step = () => {
      y += 0.5; // scroll tezligi, o'zgartirish mumkin
      if (y >= totalHeight) y = 0; // loop
      container.scrollTop = y;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  // triple duplication for seamless scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className={`overflow-hidden ${CONTAINER_HEIGHT}`} ref={containerRef}>
      <div className="flex flex-col items-center gap-[10px]">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className={`${IMAGE_WIDTH} ${IMAGE_HEIGHT} flex-shrink-0`}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover rounded-[10px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF] py-[100px]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[28px] sm:text-[54px]  font-semibold mb-[80px] text-[#262626]">
          Our Gallery
        </h3>

        <div className="flex justify-between gap-[20px]">
          <ColumnSlider images={images.column1} speed={1} />
          <ColumnSlider images={images.column2} speed={1.2} />
          <ColumnSlider images={images.column3} speed={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
