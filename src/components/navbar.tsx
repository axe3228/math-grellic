import Image from "next/image"

export const NavBar = () => (
  <div className="py-4 relative sticky top-0 backdrop-blur-sm bg-white/30 z-50"> 
    <div className="max-w-xl-2 m-auto flex justify-between z-50 px-10 max-w-screen-ab-xl mx-auto">
      <div className="mr-2 flex self-center">
        <Image 
          width={32}
          height={32}
          src={"/icons/mg-brand-logo.png"}
          alt="brand"
        />
      </div>
      <div className="space-x-12">
        <a href="">About Math Grellic</a>
        <a href="">Training</a>
        <a href="">Get Started</a>
        <button className="bg-light-coral-150 py-3 px-6 rounded-md drop-shadow-lg text-white">LOG IN</button>
      </div>
    </div>   
  </div>
)