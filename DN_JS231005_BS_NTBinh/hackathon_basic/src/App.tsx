import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import SearchFc from "./components/searchFc/searchFc";
import Add from "./components/add/add";
import { Review } from "./interface/interface";

function App() {
  const [review, setReview] = useState<Review[]>([]);

  const addReview = (review: Review): void => {
    setReview((prev: Review[]) => [...prev, review]);
  };
  const deleteReview = (id: number): void => {
    let newReview: Review[] = review.filter((item: Review) => item.id !== id);
    setReview(newReview);
  };
  return (
    <div>
      <Header />
      <SearchFc />
      {/* <Add /> */}
      {/* <Body review={review} addReview={addReview} deleteReview={deleteReview} /> */}
    </div>
  );
}

export default App;
