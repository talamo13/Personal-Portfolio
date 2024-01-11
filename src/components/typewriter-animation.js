import React from "react";
import { useTypeWriter } from "@vegadev/react-type-writer";

const TypeWriter = () => {
  const text = useTypeWriter({
    text: [
      "I am a student at Long Beach State!",
      "I am a programmer",
      "That was kinda nerdy",
    ],
    infiniteLoop: true,
    blinker: "|",
    delay: 2000,
    blinkerDelay: 300,
  });

  return <div>{text}</div>;
};

export default TypeWriter;
