import Image from "next/image"

const CardLesson = (props: any) => {
    return (
        <div className="flex items-center w-[293px] rounded-lg bg-white p-6 mr-3">
            <Image 
                width={40}
                height={40}
                src={props.icon}
                alt=""/>
            <div className="ml-3">
                <h6 className="label-md-bold text-neutral-high mb-1">{props.title}</h6>
                <p className="label-sm-md text-neutral-med">{props.desc}</p>
            </div>
        </div>
    );
}
 
export default CardLesson;