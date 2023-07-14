'use client'

import { Button } from "@/components/button"
import { AboutUsCards } from "@/components/cards/about-us-cards"
import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <NavBar />
        <div className="relative z-10">            
            <section className="max-w-screen-ab-xl mx-auto px-[150px] py-[120px] 
                                text-space-blue-200 static"> 
                <Image 
                  width={922}
                  height={820}
                  src="/images/bg-hero.png"
                  alt="school tools"
                  className="absolute top-[-80px] right-0 z-[-10]"
                />            
              <div className="flex flex-col space-y-8">
                <div>
                  <h1 className="font-squada text-space-blue-100">MATH GRELLIC</h1>
                  <p>Whenever the fun starts, learning happens</p>
                </div>
                <div>
                  <Button>GET STARTED NOW</Button>
                </div>
              </div>     
            </section>
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
              <div className="flex flex-col space-y-10">
                <h3 className="h2-lg-bold">Why choose us?</h3>  
                <div>
                  <div className="flex space-x-10">
                    <AboutUsCards 
                      src="/icons/about-us/icon-1.svg"
                      iconSize={40}
                      title="Maximized Teacher Efficiency"
                      desc="Spend less time on paperwork and assessments. 
                            Easily track students’ progress and give immediate feedback."
                      type="cardTypeA"
                    />
                    <AboutUsCards 
                      src="/icons/about-us/icon-2.svg"
                      iconSize={40}
                      title="User friendly"
                      desc="Easy to use both for students and teachers, either technology savvy or not."
                      type="cardTypeA"
                    />
                    <AboutUsCards 
                      src="/icons/about-us/icon-3.svg"
                      iconSize={40}
                      title="Organized Course"
                      desc="Lessons, drills, excercises and assessments are organized in a 
                            way of increasing difficulty to gradually facilitate the absorption of topics at hand"
                      type="cardTypeA"
                    />
                  </div>     
                </div>             
              </div>     
            </section>   
            <section className="max-w-screen-ab-xl mx-auto space-y-12 py-14 px-[150px]">
              <h3 className="h2-lg-bold">Benefits of <span className="text-light-coral-150">learning</span> with us</h3>
              <div className="flex justify-between space-x-12">
                <div className="flex flex-col space-y-12">
                  <AboutUsCards 
                    src="/icons/benefits/icon-1.svg"
                    iconSize={24}
                    title="Easy Tracking"
                    desc="Learners can easily track their learning progress and teachers at the same time can 
                          easily monitor the performances of their learners through the “statistics” feature. "
                    type="list"
                  />
                  <AboutUsCards 
                    src="/icons/benefits/icon-2.svg"
                    iconSize={24}
                    title="Learning is Fun"
                    desc="Learning a mathematical skill is embedded on games where learners play,
                          have fun and at the same time learn."
                    type="list"
                  />
                  <AboutUsCards 
                    src="/icons/benefits/icon-3.svg"
                    iconSize={24}
                    title="Flexible Study Terms"
                    desc="The student can organize his/her class with his/her teacher at a schedule most convenient 
                          to him or her. No need to attend a face-to-face class and go to community learning centers 
                          to attend Alternative Learning System (ALS) classes."
                    type="list"
                  />
                </div>
                <Image
                  width={393}
                  height={352}
                  src={"/images/learning-with-us.png"}
                  alt="socialize"
                />
              </div>
              {/* list */}
            </section>  
            <section className="max-w-screen-ab-xl mx-auto flex flex-col items-center space-y-10 py-20 px-[150px]">
              <h3 className="h2-lg-bold">Key <span className="text-light-coral-150">Features</span></h3>
              <div className="flex space-x-2">
                <AboutUsCards 
                  src="/icons/simplified-icon.svg"
                  iconSize={24}
                  title="Simplified Lessons"
                  desc="Lessons can easily be accesed and are presented in video format  to be easily grasped by 
                        Alternative Learning System (ALS) learners through their online accounts."
                  type="cardTypeB"
                />
                <AboutUsCards 
                  src="/icons/benefits/icon-3.svg"
                  iconSize={24}
                  title="Drills and Exercises"
                  desc="Drills, exercises and games are provided for the students to practice their mathematical skills. 
                        Unlike in the traditional way of using books, mastering math is just few clicks away, acquiring skills and trophies."
                  type="cardTypeB"
                />
                <AboutUsCards 
                  src="/icons/about-us/icon-1.svg"
                  iconSize={24}
                  title="Online Assessments"
                  desc="Summative tests and quizzes online can be answered wherever the students want. 
                        Scores are  also immediately reflected upon the completion of exams."
                  type="cardTypeB"
                />
              </div>
              <div className="flex space-x-2">
                <AboutUsCards 
                  src="/icons/feedback-icon.svg"
                  iconSize={24}
                  title="Immediate Feedbacks"
                  desc="In assessments, the students can automatically see the results of their exams right 
                        after completing it. Help is also provided in case that student want to ask help from 
                        their teacher regarding a particular part in the exam which seem to be ambiguous to them. "
                  type="cardTypeB"
                />
                <AboutUsCards 
                  src="/icons/benefits/icon-2.svg"
                  iconSize={24}
                  title="Ready Made Statistics "
                  desc="Students can automatically see their individual progress upon completion of activities, 
                  summative tests and quizzes using scatter plots and tables. An overall statistics comparing 
                  the performances of all students in the class are also available both for teachers and students."
                  type="cardTypeB"
                />
                <AboutUsCards 
                  src="/icons/about-us/icon-3.svg"
                  iconSize={24}
                  title="Reward System "
                  desc="In every completion of tasks, a learner earns points with corresponding badges or trophies 
                        to motivate them to strive. Rank system is also available in order for learners to see their progress 
                        relative to their classmates’ performances in the class."
                  type="cardTypeB"
                />
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
              <div className="max-w-screen-ab-xl mx-auto px-[160px]">
                <h4 className="h2-lg-bold">
                  Get started with <br/>
                  <span className="text-light-coral-150">Math Grellic</span> today.
                </h4>
              </div>       
            </section>
          </div>
        <Footer />
    </div>    
  )
}
