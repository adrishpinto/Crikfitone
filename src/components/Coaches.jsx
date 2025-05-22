import Image from "next/image";

const Coaches = () => {
    return (  
        <div className="mx-auto max-w-7xl  px-4 ">
            <h1 className="text-4xl font-bold mt-6">OUR COACHES</h1>

            <div className="mt-6 flex flex-wrap justify-center">
                <div className=" flex-1 min-w-[100px] aspect-[4/3] ">
                    <img src="/images/coach.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-[100px] aspect-[4/3]">
                    <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">Coach Name</h2>
                    <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
                    <p className="mt-6 w-fit mx-auto" >Description</p>
                </div>  
                <div className=" flex-1 min-w-[100px] aspect-[4/3] ">
                    <img src="/images/coach.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="flex-1 min-w-[100px] aspect-[4/3] ">
                    <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">Coach Name</h2>
                    <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
                    <p className="mt-6 w-fit mx-auto" >Description</p>
                </div>
                <div className=" flex-1 min-w-[100px] aspect-[4/3] ">
                     <img src="/images/coach.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className=" flex-1 min-w-[100px] aspect-[4/3] ">
                    <h2 className="text-xl font-semibold text-center mx-auto mt-12 ">Coach Name</h2>
                    <div className="w-[60px] h-[2px] bg-red-300 mx-auto mt-1 rounded"></div>
                    <p className="mt-6 w-fit mx-auto" >Description</p>
                </div>
            </div>
        </div>
    );
}   

export default Coaches;
