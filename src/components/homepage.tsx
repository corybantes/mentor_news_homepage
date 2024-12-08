import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { HeroImg } from "./heroImg";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className='p-7 py-4 md:py-7'>
      <Navbar href1='#New' href2='#Trend' />
      <div className='custom-grid'>
        <header className={`header`}>
          <HeroImg />
        </header>
        <div className=' new ' id='New'>
          <NewList />
        </div>
        <h1 className='heading text-3xl md:text-6xl md:font-bold font-semibold my-3'>
          The Bright Future of Web 3.0?
        </h1>
        <div className='section'>
          <p className='my-2 md:text-xl'>
            We dive into the next evolution of the web that claims to put the
            power into the hands of the people. But is it really fufilling its
            promise?
          </p>
          <button
            type='button'
            className='uppercase bg-primary-soft_red px-5 py-3 my-3 font-semibold text-neutral-very_dark_blue hover:bg-neutral-very_dark_blue hover:text-white'
          >
            Read More
          </button>
        </div>
        <div className='trend' id='Trend'>
          <TrendList />
        </div>
      </div>
    </div>
  );
}

const NewList = () => {
  const newList = [
    {
      name: "Hydrogen VS Electric Cars",
      intro: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      name: "The Downsides of AI Artistry",
      intro:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      name: "Is VC Funding Drying Up?",
      intro:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className='bg-neutral-very_dark_blue text-white p-5 pb-0 my-4'>
      <h1 className='text-3xl md:text-5xl text-primary-soft_orange my-3'>
        New
      </h1>
      {newList.map((item) => (
        <div key={item.name}>
          <div className='my-10'>
            <h2 className='font-semibold my-1 text-2xl'>{item.name}</h2>
            <p className='text-neutral-off_white opacity-70 m'>{item.intro}</p>
          </div>
          <div className='w-full h-[0.5px] bg-neutral-off_white' />
        </div>
      ))}
    </div>
  );
};

const TrendList = () => {
  const trendList = [
    {
      id: 1,
      name: "Reviving Retro PCs",
      intro: "What happens when old PCs are given modern upgrades",
      img: "/images/image-retro-pcs.jpg",
    },
    {
      id: 2,
      name: "Top 10 Laptops of 2022",
      intro: "Our best picks for various needs and budgets.",
      img: "/images/image-top-laptops.jpg",
    },
    {
      id: 3,
      name: "The Growth of Gaming",
      intro: "How the pandemic has sparked fresh opportunities",
      img: "/images/image-gaming-growth.jpg",
    },
  ];
  return (
    <div className=' my-3 flex flex-col lg:flex-row lg:justify-between gap-5'>
      {trendList.map((item) => (
        <div key={item.id} className='flex gap-4 my-4'>
          <Image
            src={item.img}
            width={200}
            height={254}
            alt={item.name}
            className='w-[30%]'
          />
          <div className='w-[70%] text-neutral-very_dark_blue'>
            <div className="before:content-['0'] before:left-0 text-2xl text-primary-soft_red my-2 font-semibold">
              {item.id}
            </div>
            <Link
              href={"/"}
              className='text-xl font-semibold my-2 active:text-primary-soft_red'
            >
              {item.name}
            </Link>
            <p className='text-neutral-dark_grayish_blue'>{item.intro}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
