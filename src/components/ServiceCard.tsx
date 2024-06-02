import Button from "./Button";

interface ServiceCardProps {
    image : string,
    imgtitle: string
}

const ServiceCard : React.FC<ServiceCardProps> = ({image, imgtitle}) => {
    return (
        <div className="md:w-96 grid grid-rows-3 text-center">
            <div className="flex justify-center">
                <img src={image} alt="" className="w-20" />
            </div>
            <div className="text-[#034250] text-3xl font-bold italic">{imgtitle}</div>
            <Button title = "Explore More!" />
        </div>
    )
}

export default ServiceCard;