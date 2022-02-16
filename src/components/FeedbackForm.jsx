import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, deleteFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      deleteFeedback(feedbackEdit.item.id);

      feedbackEdit.edit = false;
    }
  }, [feedbackEdit, deleteFeedback]);

  const handleTextChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      addFeedback(newFeedBack);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button
            type='submit'
            isDisabled={text.length >= 10 ? false : true}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
        {text.length > 0 && text.length < 10 && (
          <div>Review must be atleast 10 characters</div>
        )}
      </form>
    </Card>
  );
}
