const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF] py-[100px]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[54px] font-semibold mb-[80px] text-[#262626]">
          Our Gallery
        </h3>

        <div className="flex justify-between gap-[20px]">
          {/* Row 1: height 1 > 2 > 3 kamayib */}
          <div className="flex flex-col gap-[13px]">
            <img
              src="https://th.bing.com/th/id/R.f171e004dc51b097c0c67a97e9c63260?rik=DrCCa6bmYw8Q6A&riu=http%3a%2f%2fimg.hipertextual.com%2fcontent%2fimages%2fsystem%2fhome_cover_1487382543596_2cf9e3.jpg&ehk=SdOAQW1W%2bLlFWYLPr3XE%2fyWE4s6pXVm%2fO6dOx%2bQdAAM%3d&risl=&pid=ImgRaw&r=0"
              alt="1"
              className="w-[290px] h-[335px] object-cover rounded-[10px]"
            />
            <img
              src="https://ssl.cdn-redfin.com/photo/107/bigphoto/745/F10327745_0.jpg"
              alt="4"
              className="w-[290px] h-[230px] object-cover rounded-[10px]"
            />
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.-i8FQs4Q8GnnrQ2As-zefwHaE8?cb=12&w=2048&h=1367&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="7"
              className="w-[290px] h-[300px] object-cover rounded-[10px]"
            />
          </div>

          {/* Row 2: height 1 < 2 < 3 ortadi */}
          <div className="flex flex-col gap-[13px]">
            <img
              src="https://cruisepanda.com/storage/ports/K4xN9uNIStPH6yoASZcyl8TSziLJQiovgltFAG3H.jpg"
              alt="2"
              className="w-[290px] h-[280px] object-cover rounded-[10px]"
            />
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.6jZvHXWnXhXLTO9lfhpDiQHaE-?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="5"
              className="w-[290px] h-[280px] object-cover rounded-[10px]"
            />
            <img
              src="https://s1.1zoom.me/big0/16/193345-foxixol.jpg"
              alt="8"
              className="w-[290px] h-[320px] object-cover rounded-[10px]"
            />
          </div>

          {/* Row 3: o'rtadagisi katta, chekadagilari kichik */}
          <div className="flex flex-col gap-[13px]">
            <img
              src="https://i.ytimg.com/vi/pkiiD4Xwm78/maxresdefault.jpg"
              alt="3"
              className="w-[290px] h-[235px] object-cover rounded-[10px]"
            />
            <img
              src="https://cdn.pixabay.com/photo/2021/10/25/17/16/nature-6741602_960_720.jpg"
              alt="6"
              className="w-[290px] h-[350px] object-cover rounded-[10px]"
            />
            <img
              src="https://th.bing.com/th/id/R.df2ff2ce40a990b47870a93ca47849ce?rik=uO0aXncYa13eUw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-AmCjK-g_Qfk%2fUVKu87v55lI%2fAAAAAAAAECU%2fLHZGYgJhWZw%2fs1600%2fnature-wallpaper-23.jpg&ehk=dWXQ35Xfbo0N55zCtFKc9rq1dFEB9IBNv%2fWMHkKoFSI%3d&risl=&pid=ImgRaw&r=0"
              alt="9"
              className="w-[290px] h-[300px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
