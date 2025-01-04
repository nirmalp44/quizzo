
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router= useRouter();
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Image
          src="./right-hand-with-watch.png"
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <Image
          src="./grid-line.png"
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute flex flex-col items-center top-[20%] left-[160px] w-[300px] h-auto space-y-4 text-center">
        <div className="relative w-[126px] h-[110px]">
          <Image
            src="./main-logo.png"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-center text-7xl font-bold">Quizzo</h1>
        <p className="text-base !mt-8 leading-relaxed text-gray-700">
          Compete with friends, earn points, and climb the leaderboard in this addictive trivia challenge.
        </p>
        <button
         onClick={()=>{
          router.push('/question-one');
         }}
         className="bg-pink-500 px-8 py-3 rounded-lg text-white font-bold !mt-8">Start</button>
      </div>

    </div>
  );
}
