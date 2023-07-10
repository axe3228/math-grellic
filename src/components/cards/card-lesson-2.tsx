const Lesson2 = (props: any) => {
    return ( 
        <div className="flex py-4 px-6 bg-white rounded-lg mb-3 cursor-pointer">
            <div className="flex flex-col items-center mr-4">
                <p className="text-light-coral-100 label-sm-bold">{props.day}</p>
                <h4 className="h4-bold-lg text-light-coral-150">{props.date}</h4>
            </div>
            <div>
                <h6 className="text-neutral-high label-md-bold">{props.lesson}</h6>
                <p className="subheading-card text-neutral-med mb-3">{props.time}</p>
            </div>
        </div>    
    );
}
 
export default Lesson2;