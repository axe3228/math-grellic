import Image from "next/image";

export interface ScheduleProps{  
    lesson?: string
    time?: any
}

const Schedule = ({lesson, time}: ScheduleProps ) => {
    return ( 
        <div className={`flex py-4 px-6 bg-transparent rounded-lg mb-3`}>
            <div className="flex items-center">
                <Image 
                    width={40}
                    height={40}
                    src="/icons/lessons/icon-3.png"
                    alt=""/>
                <div className="ml-3">
                    <h6 className="label-md-bold text-neutral-high">{lesson}</h6>
                    <p className="label-sm-bold subheading-card mb-3 text-light-coral-200">{time}</p>
                </div>
            </div>
        </div>    
    );
}
 
export default Schedule;