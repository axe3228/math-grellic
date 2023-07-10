'use client'
import SideNavbar from "@/components/side-navbar";
import Profile from "@/components/dashboard/profile";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Button } from "@/components/button";
import Lesson3 from "@/components/cards/card-lesson-3";

const StudentLessons = () => {
    return ( 
        <div className="bg-uranian-blue-25 w-screen h-screen relative">
            <SideNavbar type={'student'} />
            <div className="py-6 pr-6 pl-[94px]">
                <div className="flex justify-end w-full">
                    <Profile />
                </div>
                <h6 className="text-neutral-high h6-bold-lg">Lessons</h6>
                <div className="flex">
                    <div className="mt-6 w-4/12 p-6">
                        <div className="flex">
                            <div className="relative w-full">
                                <i className={`bi bi-search label-sm-md text-light-coral-150 absolute top-[13px] left-[13px]`}></i>
                                <input type="text" name="name" placeholder="Search"
                                className="rounded-lg border-[#C2C9D1] label-sm-md text-neutral-accent px-4 py-3 w-full pl-[33px]"/>
                            </div>
                            <div className="flex items-center relative bg-white rounded-lg pl-3 border border-[#C2C9D1] ml-3">
                                <i className={`bi bi-calendar label-sm-md text-neutral-accent`}></i>
                                <select name="cars" id="cars" className="text-neutral-med border-none body-xs rounded-lg">
                                    <option value="">April 2021</option>
                                    <option value="">May 2021</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 overflow-y-auto h-[450px] pr-4">
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                            <Lesson3 
                                day={`Wed`}
                                date={`7`}
                                lesson={`Lesson Title : Subtitle`}
                                time={`10:00am - 11:00am`}/>
                        </div>
                    </div>
                    <div className="p-10 bg-white rounded-3xl grow">
                        <h5 className="text-neutral-high label-lg-bold mb-6">Lesson 1: Lesson Title</h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/c0GVd_HBU2U" title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className="mt-6 body-xs text-neutral-med">
                            Some description explaining about the lesson and what’s about to come.. <br />
                            Some description explaining about the lesson and what’s about to come.<br />
                            Some description explaining about the lesson and what’s about to come.<br />
                            Some description explaining about the lesson and what’s about to come.<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    );
}
 
export default StudentLessons;