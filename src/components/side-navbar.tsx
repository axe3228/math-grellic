'use client'
import { TEACHER_HOME_PAGE, STUDENT_HOME_PAGE } from '@/constants/routes'
import Image from "next/image"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';

const SideNavbar = (props: any) => {
    const pathname = usePathname()
    const [hover, setHover] = useState(false);

    const NavLink = ({url, icon, title}: any) => (
       <Link href={url} passHref className="flex items-center mb-3 group relative w-full">
            <i className={`bi bi-${icon} subheading-xl-md px-6 group-hover:text-light-coral-150 
            ${pathname === url ? 'text-light-coral-150' : 'text-neutral-accent'}`}></i>
            {hover && <p className={`label-sm-bold ${pathname === url ? 'text-light-coral-150' 
            : 'text-neutral-accent'} group-hover:text-light-coral-150 whitespace-nowrap`}>{title}</p>}
            <div className={`h-full w-1 absolute right-0 top-0 group-hover:bg-light-coral-150 rounded-lg
            ${pathname === url ? 'bg-light-coral-150' : ''}`}></div>
       </Link> 
    );

    return ( 
        <div className="flex flex-col items-start justify-between bg-white py-6 h-full z-50
        w-[70px] transform duration-200 hover:w-[223px] hover:shadow-side-nav
        fixed top-0 left-0"
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='w-full'>
                <div className="flex items-center mb-20 px-6 h-[50px]">
                    <Image 
                        width={24}
                        height={24}
                        src="/images/mg-brand-logo.png"
                        alt=""
                        className='w-[22px]'/>
                    {hover && <p className={`text-[#374785] ml-2 whitespace-nowrap font-squada`}>MATH GRELLIC</p>}
                </div>
                
                {props.type === 'teacher' ? 
                // TEACHER
                <div>
                    <NavLink url={TEACHER_HOME_PAGE} icon={'grid'} title={'Home'}/>
                    <NavLink url={'/'} icon={'collection-play'} title={'Lessons'}/>
                    <NavLink url={'/'} icon={'dice-3'} title={'Activities'}/>
                    <NavLink url={'/'} icon={'file-earmark-bar-graph'} title={'Exams'}/>
                    <NavLink url={'/'} icon={'bar-chart'} title={'Performance'}/>
                    <NavLink url={'/'} icon={'grid'} title={'Schedule'}/>
                    <NavLink url={'/'} icon={'chat'} title={'Help'}/>
                </div> 
                :
                // STUDENT
                <div>
                    <NavLink url={STUDENT_HOME_PAGE} icon={'grid'} title={'Home'}/>
                    <NavLink url={'/'} icon={'collection-play'} title={'Lessons'}/>
                    <NavLink url={'/'} icon={'dice-3'} title={'Drills and Exercises'}/>
                    <NavLink url={'/'} icon={'file-earmark-bar-graph'} title={'Exams'}/>
                    <NavLink url={'/'} icon={'bar-chart'} title={'Performance'}/>
                    <NavLink url={'/'} icon={'grid'} title={'Schedule'}/>
                    <NavLink url={'/'} icon={'chat'} title={'Ask Help'}/>
                </div>
                }
                
            </div>

            <div className='px-6'>
                {hover && 
                <Image 
                    width={175}
                    height={230}
                    src={`/images/dashboard/${props.type}-nav-graphics.png`}
                    alt=""/>}
            </div>
        </div>
    );
}
 
export default SideNavbar;