import Image from "next/image";

export const HeroImg = () => {
  return (
    <div className='my-4'>
      <div className='hidden md:flex'>
        <Image
          src={"/images/image-web-3-desktop.jpg"}
          width={1460}
          height={600}
          alt='hero-img'
          className='w-full'
        />
      </div>
      <div className='md:hidden'>
        <Image
          src={"/images/image-web-3-mobile.jpg"}
          width={686}
          height={600}
          alt='hero-img'
          className='w-full'
        />
      </div>
    </div>
  );
};
