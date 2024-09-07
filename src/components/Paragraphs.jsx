import { nanoid } from "nanoid";
const Paragraphs = ({ text }) => {
  return (
    <article className="text__box">
      {text.map((item) => {
        console.log(item);
        const id = nanoid();
        return (
          <p className="text" key={id}>
            {item}
          </p>
        );
      })}
    </article>
  );
};

export default Paragraphs;
