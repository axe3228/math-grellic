import CardLesson from "@/components/dashboard/card-lesson";
import Profile from "@/components/dashboard/profile";
import SideNavbar from "@/components/side-navbar";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from "next/image"

const Home = () => {
    const LessonVideo = ({title, duration, lock}: any) => (
        <div className="flex items-start justify-between py-3">
            <div className="flex items-center">
                <i className={`bi bi-play-circle text-[32px] text-neutral-high mr-3`}></i>
                <div>
                <h6 className="label-md-bold text-neutral-high mb-1">{title}</h6>
                <p className="label-sm-md text-neutral-med">{duration}</p>
                </div>
            </div>
            {lock && <i className={`bi bi-lock subheading-sm-md text-neutral-high`}></i>}
        </div>
    );

    return ( 
        <div className="bg-uranian-blue-25 w-screen h-screen relative">
            <SideNavbar type={'teacher'} />
            <div className="py-6 pr-6 pl-[94px] max-w-[1290px]">
                <div className="flex justify-end w-full">
                    <Profile />
                </div>
                <div className="flex items-center mt-[11px]">
                    <i className={`bi bi-sun h6-bold text-light-coral-150`}></i>
                    <h6 className="h6-bold text-light-coral-150 ml-3">Good Morning, Ma’am Myrhelle!</h6>
                </div>
                <div className="w-full mt-[33px]">
                    <div className="w-[55%]">
                        <div className="flex">
                            <input type="text" name="name" placeholder="Any announcements today?"
                            className="rounded-lg border-[#C2C9D1] label-sm-md px-4 py-3 w-full"/>
                            <button className="bg-light-coral-50 text-light-coral-200 label-sm-bold
                            py-3 px-5 rounded-md ml-3">POST</button>
                        </div>
                        <div className="flex justify-between my-[17px]">
                            <p className="label-lg-bold text-neutral-high">Upcoming Quizzes</p>
                            <button className="bg-uranian-blue-50 text-space-blue-100 label-sm-bold
                            py-2 px-3 rounded-md ml-3">See all</button>
                        </div>
                        <div className="flex overflow-x-auto nowrap w-full pb-3">
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-1.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-2.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-1.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className="p-6 bg-white rounded-lg w-[49%]">
                                <Image 
                                    width={280}
                                    height={222}
                                    src="/images/dashboard/lesson-img.png"
                                    alt=""/>
                                <div className="ml-3 mt-4">
                                    <h6 className="label-md-bold text-neutral-high mb-1">Lesson 1: Lesson Title</h6>
                                    <p className="label-sm-md text-neutral-med">Duration: 12 mins</p>
                                </div>
                            </div>
                            <div className="px-5 py-6 bg-white rounded-lg w-[49%] ml-3">
                                <h6 className="btn-text-md-bold text-neutral-high mb-1">Next Videos</h6>
                                <div>
                                    <LessonVideo 
                                        title={`Lesson 2: Lesson Title`}
                                        duration={`Duration: 10 mins`}
                                        lock={false}/>
                                    <LessonVideo 
                                        title={`Lesson 3: Lesson Title`}
                                        duration={`Duration: 10 mins`}
                                        lock={true}/>
                                    <LessonVideo 
                                        title={`Lesson 4: Lesson Title`}
                                        duration={`Duration: 10 mins`}
                                        lock={true}/>
                                    <LessonVideo 
                                        title={`Lesson 5: Lesson Title`}
                                        duration={`Duration: 10 mins`}
                                        lock={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;