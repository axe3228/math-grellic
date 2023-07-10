import Chart from "@/components/cards/chart";
import CardLesson from "@/components/cards/card-lesson";
import Profile from "@/components/dashboard/profile";
import SideNavbar from "@/components/side-navbar";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from "next/image"
import Lesson from "@/components/cards/card-lesson-2";
import Lesson4 from "@/components/cards/card-lesson-4";

const Home = () => {
    return ( 
        <div className="bg-uranian-blue-25 w-screen h-screen">
            <SideNavbar type={'student'} />
            <div className="py-6 pr-6 pl-[94px]">
                <div className="flex justify-end w-full">
                    <Profile />
                </div>
                <div className="flex items-center mt-[11px]">
                    <i className={`bi bi-sun h6-bold text-light-coral-150`}></i>
                    <h6 className="h6-bold text-neutral-high ml-3">Good Morning, Mae!</h6>
                </div>
                <div className="flex justify-between w-full mt-[33px]">
                    <div className="w-[49%]">
                        <div className="flex items-start py-2 px-6">
                            <Image 
                                width={32}
                                height={32}
                                src="/icons/icon-quote-mark.png"
                                alt=""/>
                            <div className="ml-4">
                                <h6 className="text-neutral-high label-md-bold">Today’s announcement</h6>
                                <p className="lead-md text-neutral-med">Any announcements made by the teacher will be put here to notify the students </p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div>
                            <Lesson4
                                icon={`/icons/lessons/lessons-availbale.png`}
                                title={'3 lessons'}
                                desc={`Available Lessons`}/>
                            </div>
                            <div className="mx-4">
                            <Lesson4
                                icon={`/icons/lessons/activities-pending.png`}
                                title={'2 activities'}
                                desc={`Pending Activities`}/>
                            </div>
                            <div>
                            <Lesson4
                                icon={`/icons/lessons/activities-completed.png`}
                                title={'5 activities'}
                                desc={`Completed Activities`}/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[17px]">
                            <p className="label-lg-bold text-neutral-high">Upcoming Lessons</p>
                            <button className="bg-uranian-blue-50 text-space-blue-100 label-sm-bold
                            py-2 px-3 rounded-md ml-3">See all</button>
                        </div>
                        <div className="flex overflow-x-auto nowrap w-full pb-3">
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-3.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-4.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-3.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                            <div>
                            <CardLesson
                                icon={`/icons/lessons/icon-4.png`}
                                title={'Activity Title'}
                                desc={`Some description explaining 
                                about the lesson and what’s about to come.`}/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[17px]">
                            <p className="label-lg-bold text-neutral-high">Upcoming Activities</p>
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
                    </div>
                    <div className="flex w-[49%]">
                        <div className="flex flex-col justify-start">
                            <Chart 
                            title={`Weekly Activity`}
                            desc={`Submissions this week: 5`} />
                            <Lesson4
                                icon={`/icons/lessons/ranking.png`}
                                title={'1st'}
                                desc={`Current ranking`}
                                class={'mt-4 max-w-full'}/>
                            <Lesson4
                                icon={`/icons/lessons/points.png`}
                                title={'245 points'}
                                desc={`Points earned`}
                                class={'mt-4 max-w-full'}/>
                            <Lesson4
                                icon={`/icons/lessons/trophies.png`}
                                title={'12 trophies'}
                                desc={`Trophies earned`}
                                class={'mt-4 max-w-full'}/>
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