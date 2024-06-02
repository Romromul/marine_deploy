import { CardServiceType } from "../types/type";

const CareService: React.FC<CardServiceType> = ({ src, alt, title1, title2, text }) => {
    return (
        <div className="w-[230px]">
            <div className="flex justify-center"><img src={src} alt={alt} /></div>
            <p className="text-[#063752] text-2xl text-center font-bold uppercase italic ">{title1}</p>
            <p className="text-[#063752] text-2xl text-center font-bold uppercase italic ">{title2}</p>
            <p className="text-[#063752] font-poppins">{text}</p>
        </div>
    )
}

export default CareService;