import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import "./body.css";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const Body = () => {
  const [count, setCount] = useState<number>(200);
  const [content, setContent] = useState<string>("");

  return (
    <section className="body">
      <div className="reviewBox">
        <textarea
          id="reviewText"
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
        ></textarea>
        <div className="reviewBottom">
          <p>{count} left</p>
          <button className="Btn">
            PUBLISH <FaArrowUp />
          </button>
        </div>
        <div className="addActions">
          <span>{count} left</span>
          <div className="addAction">
            <p>PUBLISH</p>
            <FaArrowUp className="iconAdd" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
