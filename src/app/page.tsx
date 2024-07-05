import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiBatteryFull } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";

export default function Page() {
  const dummy_blog = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-5 text-gray-100 w-full bg-slate-500 pt-32">
      {dummy_blog.map((blog) => (
        <div
          key={blog.id}
          className="relative flex flex-col items-center justify-center m-5 rounded-lg shadow-lg md:w-3/5 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full p-1 bg-slate-700 rounded-t-lg flex justify-between z-20">
            <IoCloseCircleSharp size={30} className="text-red-500" />
            <div className="flex">
              <CiBatteryFull size={30} className="text-green-600" />
              <CiCoffeeCup size={30} className="text-white" />
            </div>
          </div>

          <Link href={`/blog/${blog.id}`} className="flex flex-col items-center justify-center w-full p-5 relative z-10 h-96">
            <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" className="rounded-lg absolute inset-0 z-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80" />
            <div className="relative z-20 bg-black bg-opacity-50 p-5 rounded-lg transition duration-300 ease-in-out group-hover:bg-opacity-75 group-hover:scale-105">
              <h2 className="text-xl font-bold mt-3">{blog.title}</h2>
              <p className="text-center mt-3">{blog.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
