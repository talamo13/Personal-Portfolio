import React from "react";
import { useTypeWriter } from "@vegadev/react-type-writer";

const TypeWriter = () => {
  const text = useTypeWriter({
    text: [
      "I Am A Student At Long Beach State!",
      "Experience As A NASA Intern",
      "Created This Website Using React JS!",
    ],
    infiniteLoop: true,
    blinker: "|",
    delay: 500,
    blinkerDelay: 300,
  });

  return (
    <div
      style={{
        color: "#d6d8e4",
        fontSize: "50px",
        fontWeight: "bold",
        height: "80px",
      }}
    >
      {text}
    </div>
  );
};

export default TypeWriter;
