import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Movie & Book Recommendation Engine</h1>
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