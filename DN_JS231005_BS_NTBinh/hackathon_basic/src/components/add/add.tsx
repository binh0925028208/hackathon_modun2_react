import React, { useState, ChangeEvent } from "react";
import { Review } from "../../interface/interface";
import { PropsAdd } from "../../interface/interface";
import { FaLongArrowAltUp } from "react-icons/fa";
let str = Date();
let arr = str.split(" ");
let dateUi = arr[0] + "-" + arr[2] + "-" + arr[1] + "-" + arr[3];

const Add = (props: PropsAdd): JSX.Element => {
  const [content, setContent] = useState<string>("");
  const [count, setCount] = useState<number>(200);
  console.log(content);

  const handleAddReview = (): void => {
    const newReview: Review = {
      id: Math.random() * 100,
      content: content,
      date: dateUi,
    };
    props.addReview(newReview);
    setContent("");
  };

  return (
    <section className="addReview">
      <div className="addGroup">
        <textarea
          value={content}
          placeholder="Type review here"
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(event.target.value);
            if (200 - event.target.value.length >= 0) {
              setCount(200 - event.target.value.length);
            } else {
              alert("Stop Please!!!!");
            }
          }}
          style={{ resize: "none" }}
          name=""
          id=""
        ></textarea>
        <div onClick={handleAddReview} className="addActions">
          <span>{count} left</span>
          <div className="addAction">
            <p>PUBLISH</p>
            <FaLongArrowAltUp className="iconAdd" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add;
