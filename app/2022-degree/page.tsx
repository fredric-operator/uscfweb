"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[20px] text-white font-semibold">
            Select Course Level:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block ">
            
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">            
            <Link
              href="/biology16"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              biology
            </Link>


            
            <Link
              href="/biology16"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              biology
            </Link>


          
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-40 z-[20] right-5 flex-col md:hidden gap-5">
   

   

   

        <Link
          href="/biology16"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          biology
        </Link>



        <Link
          href="/biology16"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          biology
        </Link>
 
      </div>



      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/ground.jpg"
          alt="trees"
          width={2000}
          height={1500}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
