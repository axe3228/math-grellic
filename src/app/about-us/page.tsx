import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import Image from "next/image"

const AboutUs = () => (
  <div>
    <NavBar />
    <section className="max-w-screen-ab-xl mx-auto flex flex-col py-[120px] px-[150px] space-y-[120px]">
      <div className="flex space-x-20">
        <div>
          <Image
            width={320}
            height={320}
            src={"/images/mg-brand-logo.png"}
            alt=""
          />                
        </div>
        <div className="max-w-[740px] ml-20 space-y-6">
          <h2 className="h2-lg-bold">About <span className="text-light-coral-150"> Math Grellic</span></h2>
            <p className="text-neutral-med">
              <span className="text-light-coral-150">Math Grellic</span> is a game-based website application designed and developed to help 
                address the least dealt learning competencies of the K to 12 Basic Education Curriculum 
                for the Alternative Learning System (ALS-K to 12) specifically in the Learning Strand 3 
                (Mathematical and Problem Solving Skills).
            </p>
            <p className="text-neutral-med">
              Moreover, this website application is designed not only to help 
              the Alternative Learning System (ALS) learners master a mathematical skill but also 
              the Alternative Learning System (ALS) teachers to easily track the progress of their learners 
              and give feedbacks immediately. 
              Less paper works in the case of teachers for everything is 
              made easier through the help of technology.
            </p>
        </div> 
      </div>                           
    </section>
    <Image 
        sizes="100vw" 
        width={0} 
        height={0} 
        src="/images/waves.png" 
        alt="" 
        style={{ 
          width: "100%", 
          height: "220.92px", 
          marginBottom: "-2px" 
      }} 
    />
    <section className="text-white bg-dark-secondary pb-16 relative">     
      <div className="max-w-screen-ab-xl mx-auto py-14 px-[154px]">
        <div className="bg-space-blue-100 rounded-lg text-center relative">
          <Image 
            src={"/images/teacher-myrhelle.png"}
            width={180}
            height={180}
            alt="Myrhelle Grecia"
            className="absolute -top-[90px] right-[42%]"
          />
          <div className="pt-32 pb-14 px-10 max-w-[998px] mx-auto">
            <div>
              <h2 className="h3-bold-lg text-[#A8D0E6]">Myrhelle Grecia</h2>
              <p>Teacher / Founder</p>
            </div>
            <p>
              Myrhelle D. Grecia, LPT, finished her Bachelor in Secondary Education major in Mathematics 
              at West Visayas State University last 2016. Currently, she is taking up her Master 
              of Arts in Education major in Mathematics in the same University. She was a former public 
              school teacher under the Department of Education Division of Iloilo City, 
              teaching Mathematics subjects to Senior High School students. Aside from her regular 
              teaching loads before, she was also an active Alternative Learning System teacher for 3 years 
              teaching literacy and skills trainings to out-of-school children, youth and adults under the 
              same division. In 2018, she was nominated as one Best Alternative Learning System Implementer 
              and has received various awards like Fifteen Top Most Productive Alternative Learning 
              System (ALS) Implementers (2018) and One of the Division of Iloilo City ALS Learning 
              Facilitators with 100% and Above Productivity Rating in the March 2019 A&E Test (2019).
            </p>
          </div>          
        </div>
      </div>       
    </section>
    <Footer/>
  </div>
  
)

export default AboutUs