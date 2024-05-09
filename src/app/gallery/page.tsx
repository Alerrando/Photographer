import { Key } from "react";
import { images } from "../util";

export default function Gallery() {
  return (
    <main className="w-full p-4 md:p-12 mt-[12%] md:mt-[5%] columns-2 md:columns-4 gap-4">
      {images.map((image: string, index: Key) => (
        <img src={image} alt="" className="w-full rounded-lg mb-4" key={index} />
      ))}
    </main>
  );
}
