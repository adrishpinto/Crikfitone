import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef,useEffect } from "react";

const Coaches = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
        const scrollByAmount = scrollRef.current?.offsetWidth / 3 || 0;
        scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
        const scrollByAmount = scrollRef.current?.offsetWidth / 3 || 0;
        scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });

    }
  };

// useEffect(() => {
//   const interval = setInterval(() => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//       // If reached end, reset
//       if (scrollLeft + clientWidth >= scrollWidth) {
//         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
//       }
//     }
//   }, 5000);

//   return () => clearInterval(interval); // clean up
// }, []);

  return (
    <div className=" w-[90vw] mx-auto px-4">
      <h1 className="text-4xl font-bold mt-6 ml-8">OUR COACHES</h1>
      <div className="flex items-center scroll scrollbar-hide mt-6">
        <MdChevronLeft
          size={50}
          className="mr-2 cursor-pointer h-20 rounded-2xl bg-gray-300"
          onClick={scrollLeft}
        />
        <div
          className="overflow-hidden scrollbar-hide scroll-smooth w-[82.5vw]"
          ref={scrollRef}
        >
          <div className="mt-6 flex flex-nowrap">
            <div className=" flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <img
                src="/images/coach.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex-shrink-0 basis-1/3 aspect-[4/3]">
              <h2 className="text-xl font-semiboald text-center mx-auto mt-12 ">
                Coach Name
              </h2>
              <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
              <p className="mt-6 w-fit mx-auto">Description</p>
            </div>
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <img
                src="/images/coach.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3]">
              <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">
                Coach Name
              </h2>
              <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
              <p className="mt-6 w-fit mx-auto">Description</p>
            </div>
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <img
                src="/images/coach.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-nowrap">
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">
                Coach Name
              </h2>
              <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
              <p className="mt-6 w-fit mx-auto">Description</p>
            </div>
            <div className="  flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <img
                src="/images/coach.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">
                Coach Name
              </h2>
              <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
              <p className="mt-6 w-fit mx-auto">Description</p>
            </div>
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <img
                src="/images/coach.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 basis-1/3 aspect-[4/3] ">
              <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">
                Coach Name
              </h2>
              <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
              <p className="mt-6 w-fit mx-auto">Description</p>
            </div>
          </div>
        </div>
        <MdChevronRight
          size={50}
          className="ml-2 cursor-pointer bg-gray-300 h-20 rounded-2xl"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default Coaches;
