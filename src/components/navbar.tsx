"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "./button"
import { ModalAuth } from "./modal-auth"

export const NavBar = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  return (
    <div className="py-4 relative sticky top-0 backdrop-blur-sm bg-white/30 z-50"> 
      <div className="max-w-xl-2 m-auto flex justify-between 
                    z-50 px-10 max-w-screen-ab-xl mx-auto  text-space-blue-100">
        <a href="/" className="mr-2 flex self-center">
          <Image 
            width={32}
            height={32}
            src={"/icons/brand-logo.png"}
            alt="brand"
            className="mr-2 "
          />
          <h6 className="font-squada">MATH GRELLIC</h6>
        </a>
        <div className="space-x-12 btn-text-md-bold">
          <a href="/about-us">About Math Grellic</a>
          <a href="">Training</a>
          <a href="">Get Started</a>
          <Button onClick={() => setOpenModal(true)}>LOG IN</Button>
          <ModalAuth 
            isOpen={isOpenModal}
            onRequestClose={() => setOpenModal(false)}
            closeModal={() => setOpenModal(false)}
          />
        </div>
      </div>   
    </div>
  )
}