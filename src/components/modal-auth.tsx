import Image from "next/image"
import { Modal } from "./modal"

interface ModalProps{
   isOpen: boolean,
   onRequestClose: () => void,
   closeModal: () => void
}

export const ModalAuth = ({ isOpen, onRequestClose, closeModal }: ModalProps) => {
  return (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <div className="w-[1080px] h-[675px]">
      <div className="flex justify-between pt-10 px-10">
        <Image 
          src={"/images/mg-brand-logo.png"}
          width={40}
          height={40}
          alt=""
        />
        <button onClick={closeModal}>
          <i className="bi bi-x"></i>
          CLOSE
        </button>
      </div>   
      <div className="max-w-[400px] pt-20 mx-auto text-center space-y-8 "> 
        <div>
          <h3>Which one are you?</h3>
          <p>Select your role in the classroom to login</p>
        </div>        
        <div className="flex space-x-10 justify-center">
          <a href="/teacher">
          <button className="hover:drop-shadow-xl">
            <Image
              src={"/images/modal-teacher.png"}
              width={180}
              height={187}
              alt=""
            />
            <p>Teacher</p>
          </button>
          </a>          
          <a href="/student">
            <button className="hover:drop-shadow-xl">
              <Image
                src={"/images/modal-student.png"}
                width={180}
                height={187}
                alt=""
              />
              <p>Student</p>
            </button>
          </a>
          
        </div>        
      </div>
    </div>    
  </Modal>
)}