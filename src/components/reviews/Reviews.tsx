import Contents from "../../content/contents";
import { ReviewCardType } from "../../types/type";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center"><img src="src/assets/icons/rate.svg" alt="" /></div>
            <p className="text-3xl text-[#BF9550] font-birthstone">Happy Customers</p>
            <p className="mb-20 text-6xl text-white uppercase italic">5-STAR GOOGLE REVIEWS!</p>
            <div className="flex gap-20 justify-center items-center text-center mx-20">
                {Contents.homereviews.map((item: ReviewCardType, index: number) => <ReviewCard key={index} button={item.button} text={item.text} />)}
            </div>
        </div>
    )
}

export default Reviews;