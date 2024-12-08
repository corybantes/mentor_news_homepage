"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({
  href1,
  href2,
}: {
  href1: string;
  href2: string;
}) {
  //   const { toggle, setToggle } = useState(false);
  const [status, setStatus] = useState(false);
  return (
    <div>
      <div className='flex justify-between my-4'>
        <Image src={"/images/logo.svg"} width={65} height={40} alt='logo' />
        <div className='hidden md:flex'>
          <ul className='md:flex md:gap-10'>
            <li>
              <Link href={"/"} className='active:text-primary-soft_orange'>
                Home
              </Link>
            </li>
            <li>
              <Link href={href1} className='active:text-primary-soft_orange'>
                New
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Popular
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Trending
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <button
          type='button'
          className='p-3 md:hidden'
          onClick={() => {
            setStatus(true);
          }}
        >
          <Image
            src={"/images/icon-menu.svg"}
            width={40}
            height={17}
            alt='navigation'
            className={`${status == false ? "block" : "hidden"}`}
          />
        </button>
      </div>
      <div
        className={`md:hidden ${
          status == false
            ? "hidden"
            : "fixed top-0 left-0 h-screen z-40 w-full bg-black bg-opacity-25 flex justify-end"
        }`}
      >
        <div className='w-3/5 relative bg-neutral-off_white h-screen z-40 py-7 px-4'>
          <button
            type='button'
            className='max-w-[31px] max-h-[31px] absolute right-0 mx-3'
            onClick={() => {
              setStatus(false);
            }}
          >
            <Image
              src={"/images/icon-menu-close.svg"}
              width={32}
              height={31}
              alt='close'
              className='w-full'
            />
          </button>
          <ul className='flex flex-col space-y-6 py-20'>
            <li>
              <Link href={"/"} className='active:text-primary-soft_orange'>
                Home
              </Link>
            </li>
            <li>
              <Link href={href1} className='active:text-primary-soft_orange'>
                New
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Popular
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Trending
              </Link>
            </li>
            <li>
              <Link href={href2} className='active:text-primary-soft_orange'>
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
