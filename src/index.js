import _ from "lodash";

export default () => {
  const greeting = "Hello, Hexlet!";
  const count = _.last(["one", "two"]);
  return `${greeting}\n${count}`;
};
