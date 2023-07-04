import Image from "next/image";

export interface AboutUsCardsProps {
  src: string,
  title: string,
  desc: string,
  type: string,
  iconSize: number
}

export const AboutUsCards = ({ src, title, desc, type, iconSize = 24 }: AboutUsCardsProps) =>  {
  let cardstyle, iconStyle, listStyle, titleStyle = '';

  switch (type) {
    case "cardTypeA":
      cardstyle = "max-w-[353px] flex flex-col space-y-6 drop-shadow-md bg-white py-10 px-8 items-center rounded-md";
      iconStyle = "";
      listStyle = "";
      titleStyle ="subheading-lg-bold";
      break;
    case "cardTypeB":
      cardstyle = "max-w-[311px] flex flex-col space-y-2 bg-white py-4 px-6 items-center";
      iconStyle = "bg-gray rounded-[50%] p-6";
      listStyle = "";    
      titleStyle ="subheading-lg-bold";
      break;
    case "list":
    default:
      cardstyle = "";
      iconStyle = "bg-gray rounded-[50%] p-6";
      listStyle = "flex space-x-10 max-w-[668px] items-start";
      titleStyle ="h5-lg";
      break;
  }
  return(
    <div className={`${type !== "list"? cardstyle : listStyle}`}>
      <div className={iconStyle}>
        <Image 
          width={0}
          height={0}
          src={`${src}`}
          alt="icon"
          style={{
            width: `${iconSize}px`, maxHeight: `${iconSize}px`
          }}
        />
      </div>
      <div className={`${type !== "list"? "text-center" : "text-left max-w-[555px]"}`}>
        <p className={`${titleStyle} mb-1`}>{title}</p>
        <p className="lead-md text-neutral-med">{desc}</p>
      </div>
    </div>
)}