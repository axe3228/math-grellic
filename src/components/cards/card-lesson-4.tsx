import Image from "next/image"

const Lesson4 = (props: any) => {
    return (
        <div className={`flex items-center max-w-[201px] rounded-lg bg-white p-6 ${props.class}`}>
            <Image 
                width={32}
                height={32}
                src={props.icon}
                alt=""/>
            <div className="ml-3">
                <h6 className="label-md-bold text-neutral-high mb-1">{props.title}</h6>
                <p className="subheading-card text-neutral-med">{props.desc}</p>
            </div>
        </div>
    );
}
 
export default Lesson4;