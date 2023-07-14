'use client'

import Schedule from "@/components/cards/card-scehdule";
import Profile from "@/components/dashboard/profile";
import SideNavbar from "@/components/side-navbar";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TimeCard = (props:any) => {
  return (
    <div className="relative flex">
        <div className="relative bg-light-card rounded-lg px-3 py-2 
                        flex justify-center w-[80px] z-10">
          <p className="text-light-coral-150 label-large">{props.timeText}</p>   
        </div>
      <hr className="w-full mt-5 z-0 text-neutral-accent"/>
    </div>  
)}


const StudentSchedule = () => {
  const [date, setDate] = useState(new Date());
  return (
  <div className="bg-uranian-blue-25 w-screen h-screen relative p-6">
    <SideNavbar type={'student'} />
    <div className="">
      <div className="flex justify-end w-full">
        <Profile />
      </div>
      <div className="flex pl-[94px] space-x-[30px] pt-4">
        <div className="basis-3/5">        
          <h4 className="text-neutral-high h6-bold-lg mb-6 text-space-blue-100">Today's Schedule</h4>
          <div className="flex flex-col space-y-5">
            <TimeCard timeText="8 AM" />
            <TimeCard timeText="9 AM" />
            <TimeCard timeText="10 AM" />
            <TimeCard timeText="11 AM" />
            <TimeCard timeText="12 NN" />
            <TimeCard timeText="1 PM" />
            <TimeCard timeText="2 PM" />
            <TimeCard timeText="3 PM" />
            <TimeCard timeText="4 PM" />
            <TimeCard timeText="5 PM" />
          </div>
        </div>
        <div className="basis-2/5 flex-col space-y-4">
          <div>
            <Calendar
               onChange={() =>setDate}
               value={date}
            />
          </div>
          <div>
            <h6 className="label-large text-neutral-high">Ongoin Activities</h6>
            <div>
              <Schedule   
                lesson="Algebra Activity: Lesson Title and Desc"
                time={"Deadline: 30 Jun 2021"}
              />
              <Schedule   
                lesson="Algebra Activity: Lesson Title and Desc"
                time={"Deadline: 30 Jun 2021"}
              />
              <Schedule   
                lesson="Algebra Activity: Lesson Title and Desc"
                time={"Deadline: 30 Jun 2021"}
              />
              <Schedule   
                lesson="Algebra Activity: Lesson Title and Desc"
                time={"Deadline: 30 Jun 2021"}
              />
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
)}

export default StudentSchedule;