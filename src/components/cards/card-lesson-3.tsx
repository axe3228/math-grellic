import Image from "next/image"

const Lesson3 = (props: any) => {
    return ( 
        <div className="flex py-4 px-6 bg-transparent rounded-lg mb-3 cursor-pointer
        hover:bg-white hover:shadow-panel-shadow">
            <div className="flex flex-col items-center mr-4">
                <p className="text-light-coral-100 label-sm-bold">{props.day}</p>
                <h4 className="h4-bold-lg text-light-coral-150">{props.date}</h4>
            </div>
            <div className="flex items-center">
                <Image 
                    width={40}
                    height={40}
                    src="/icons/lessons/icon-3.png"
                    alt=""/>
                <div className="ml-3">
                    <h6 className="text-neutral-high label-md-bold">{props.lesson}</h6>
                    <p className="subheading-card text-neutral-med mb-3">{props.time}</p>
                </div>
            </div>
        </div>    
    );
}
 
export default Lesson3;