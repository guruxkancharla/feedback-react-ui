import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStats() {
  //Calc ratings avd
  const { feedback } = useContext(FeedbackContext);

  let average = (
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
