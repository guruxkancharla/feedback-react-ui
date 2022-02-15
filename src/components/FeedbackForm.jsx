import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const handleTextChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };

      handleAdd(newFeedBack);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* Rating Select Component */}
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
