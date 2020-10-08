import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework",
  },
  {
    title: "why use React?",
    content: "React is a favorite JS library",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
