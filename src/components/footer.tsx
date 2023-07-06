import Image from "next/image";

export const Footer = () => (
  <div className="bg-dark-secondary py-6 text-white drop-shadow-[0_-8px_20px_rgba(0,0,0,0.3)] relative z-10">
    <div className="max-w-[1440px] mx-auto px-[165px] flex justify-between items-center h-8">
      <div className="flex space-x-3">
        <Image 
          width={32}
          height={32}
          src={"icons/brand-logo.svg"}
          alt="brand logo"
        />
        <h6 className="subheading-xl-regular font-squada">MATH GRELLIC</h6>
      </div>
      <p className="label-sm-md">© 2023 Math Grellic. All rights reserved</p>
    </div>   
  </div>
)