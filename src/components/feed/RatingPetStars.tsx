import { useEffect, useState } from "react";
/* import { toast } from "sonner"; */
import ReactStars from "react-rating-star-with-type";
/* import useAuthStore from "@/stores/AuthStore";
import PropertyMyCalification from "./PropertyMyCalification";
 */
interface Props {
  rating: number;
}

function RatingPetStars({ rating }: Props) {
  return (
    <div className="flex gap-8 my-5 items-center justify-center ">
      <div className={`flex flex-col items-center justify-center`}>
        <p className="text-sm my-1">Rating:</p>
        <ReactStars
          value={rating}
          activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
        />
      </div>
    </div>
  );
}

export default RatingPetStars;
