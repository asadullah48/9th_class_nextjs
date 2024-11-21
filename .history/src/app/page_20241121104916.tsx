import React from "react";
import Image from "next/image";

export deffunction Home() {

  // let array: [string, number, boolean] = ["asad", 2, true, "ahmed"]

  return <div className="main flex h-screen">
    {/* <div className="box" id="box1">Box 1 </div>
    <div className="box" id="box2" >Box 2</div> */}
    <div className=" flex justify-center items-center h-[200px] w-[200px] bg-blue-500 border-2 border-black">Box 1 </div>
    <div className="flex justify-center items-center h-[200px] w-[200px] bg-slate-400 border-2 border-black">Box 2</div>
    <div className=" flex justify-center items-center h-[200px] w-[200px] bg-blue-500 border-2 border-black">Box 3 </div>
    <div className="flex justify-center items-center h-[200px] w-[200px] bg-slate-400 border-2 border-black">Box 4</div>
  
  </div>;
}

