import van from "../../../lib/van-0.12.2";
import { Leafer, Rect, Text } from "leafer-ui";
const { div } = van.tags;

const Profile = () => {
  const div_dom = div(); // div() => HTMLDivElement
  const leafer = new Leafer({
    view: div_dom,
    width: 600,
    height: 600,
    hittable: true,
  });
  const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    stroke: 'black', 
    strokeWidth: 2,
    cornerRadius: 20,
  });

  const text = new Text({
    fill: 'rgb(50,205,121)',
    text: 'Hello LeaferJS',
  });

  leafer.add(rect);
  leafer.add(text);

  return div({ class: "profile" }, div_dom);
};

export {
  Profile
}