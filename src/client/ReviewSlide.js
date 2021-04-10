import React, { useEffect, useState } from "react";

function ReviewSlide({ reviews }) {
  const reviewTitles = reviews.map((review) => review.description);
  const [review, setReview] = useState(reviewTitles[0]);
  const [index, setIndex] = useState(0);
  let timer;

  const Review = () => {
    return <h4 className="reviews">{review}</h4>;
  };
  useEffect(() => {
    displayReview();
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const displayReview = () => {
    timer = setInterval(() => {
      if (index === reviewTitles.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
      setReview(reviewTitles[index]);
    }, 5000);
  };
  return (
    <div className="review-container">
      <Review current={review}></Review>
    </div>
  );
}

export default ReviewSlide;
