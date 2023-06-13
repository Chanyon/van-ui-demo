import van from "../../../lib/van-0.12.2";
import "./index.scss";
const { div } = van.tags;

const Home = () => {
  return div({ class: "home" },"home");
};

export {
  Home
}