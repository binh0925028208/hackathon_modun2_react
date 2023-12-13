import React from "react";
export interface Review {
  id: number;
  content: string;
  date: string;
}

export interface PropsAdd {
  addReview: Function;
}

export interface PropsReview {
  addReview: Function;
  deleteReview: Function;
  review: Review[];
}
const Interface = () => {
  return <div>Interface</div>;
};

export default Interface;
