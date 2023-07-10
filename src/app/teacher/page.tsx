import Chart from "@/components/dashboard/chart";
import CardLesson from "@/components/dashboard/card-lesson";
import Profile from "@/components/dashboard/profile";
import SideNavbar from "@/components/side-navbar";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from "next/image"
import Lesson from "@/components/dashboard/lesson";

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
            <div className="py-6 pr-6 pl-[94px]">
                <div className="flex justify-end w-full">
                    <Profile />
                </div>
                <div className="flex items-center mt-[11px]">
                    <i className={`bi bi-sun h6-bold text-light-coral-150`}></i>
                    <h6 className="h6-bold text-light-coral-150 ml-3">Good Morning, Ma’am Myrhelle!</h6>
                </div>
                <div className="flex justify-between w-full mt-[33px]">
                    <div className="w-[49%]">
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
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-1.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className="flex flex-col p-6 bg-white rounded-lg w-[49%]">
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
                    <div className="flex w-[49%]">
                        <div>
                            <Chart 
                            title={`Class Diligence`}
                            desc={`Check whole class’ latest improvement.`} />
                            <div className="mt-3">
                            <Chart 
                            title={`Weekly Activity`}
                            desc={`Submissions this week: 5`} />
                            </div>
                        </div>
                        <div className="ml-6 grow">
                            <div className="flex justify-between items-center mb-3">
                                <h6 className="text-neutral-high label-large">Schedule</h6>
                                <div className="bg-light-coral-25 max-w-8 py-1 px-2 rounded">
                                    <i className='bi bi-calendar-week-fill text-light-coral-150 text-base'></i>
                                </div>
                            </div>
                            <div className="overflow-y-auto h-[570px] pr-4">
                                <p className="label-sm-bold text-neutral-med mb-3">April 2021</p>
                                <div>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`7`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`14`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`21`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`28`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                </div>
                                <p className="label-sm-bold text-neutral-med mb-3">May 2021</p>
                                <div>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`7`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`14`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`21`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                    <Lesson 
                                    day={`Wed`}
                                    date={`28`}
                                    lesson={`Lesson Title : Subtitle`}
                                    time={`10:00am - 11:00am`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;