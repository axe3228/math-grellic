'use client'
import Image from "next/image"
import React, { useState, useEffect } from 'react';

const Profile = () => {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let day = newDate.getDay();

        setCurrentDate(`${date} ${monthNames[month]} ${year}, ${days[day]}`)
     },[currentDate]);

    return ( 
        <div className="flex items-center">
            <p className="label-md-bold text-neutral-med mr-4">{currentDate}</p>
            <Image 
                width={35}
                height={35}
                src="/icons/avatar.png"
                alt=""/>
        </div>
    );
}
 
export default Profile;