"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        ... what is there <br /> to watch?
      </motion.h1>
    </LampContainer>
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <Image
          src="/placeholder-image.jpg"
          alt="Placeholder"
          width={300}
          height={400}
          className="rounded-lg mb-6"
        />
        <div className="flex justify-between w-full mb-6">
          <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition duration-300 flex items-center justify-center">
            <Image src="/dislike-icon.png" alt="Dislike" width={64} height={64} />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition duration-300 flex items-center justify-center">
            <Image src="/like-icon.png" alt="Like" width={64} height={64} />
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Title</h2>
          <p className="text-gray-400">Description of the movie or book goes here.</p>
        </div>
      </div>
    </div>
  );
}