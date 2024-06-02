import Button from "../Button";
import { ReviewCardType } from "../../types/type";

const ReviewCard: React.FC<ReviewCardType> = ({button, text}) => {
    return(
        <div>
            <div className="flex items-center w-96 h-64 bg-white text-[#063752] font-poppins rounded-2xl p-5">{text}</div>
            <div className="mt-[-18px]"><Button title={button}/></div>
        </div>
    )
}

export default ReviewCard;