import { useState } from "react";
import Paragraphs from "./Paragraphs";
const Container = ({ data }) => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="container">
      <div className="title-container">
        <h1 className="heading-primary mb-md">
          Welcome to Lorem Ipsum Generator
        </h1>
      </div>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      {text.length === 0 ? (
        <div className="default-message">
          <p>Click button to generate text</p>
        </div>
      ) : (
        <Paragraphs text={text} />
      )}
    </section>
  );
};

export default Container;
