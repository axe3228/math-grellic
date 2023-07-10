import Image from "next/image"
import 'bootstrap-icons/font/bootstrap-icons.css'

const Chart = (props: any) => {
    return ( 
        <div className="px-3 pt-3 pb-6 bg-white max-w-[257px] rounded-lg">
            <div className="flex justify-between items-center">
                <h6 className="text-neutral-high label-large">{props.title}</h6>
                <div className="bg-light-coral-25 max-w-8 py-1 px-2 rounded">
                    <i className='bi bi-bar-chart-fill text-light-coral-150 text-base'></i>
                </div>
            </div>
            <p className="subheading-card text-neutral-med mb-3">{props.desc}</p>
            <Image 
                width={225}
                height={156}
                src="/images/dashboard/chart-img.png"
                alt=""/>
        </div>
    );
}
 
export default Chart;