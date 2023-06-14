import van from "../../../lib/van-0.12.2";
import "./index.scss";
const { div, p, button, img } = van.tags;

const Home = () => {
  const tag_btn = [{ class: "nact", text: "Expertise" }, { class: "act", text: "Branding" }, { class: "act", text: "Product" }, { class: "act", text: "Design System" }]
  const text = ["A brand and product", "designer working with", "clients globally"];
  const imgs_list = [{ url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.WIPGOSjvBCyQqYH0xXa4DgHaEo?w=306&h=191&c=7&r=0&o=5&dpr=2&pid=1.7" }, { url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.WIPGOSjvBCyQqYH0xXa4DgHaEo?w=306&h=191&c=7&r=0&o=5&dpr=2&pid=1.7" },
  { url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.91MIJuv-a0LG1CJTusYVPQHaEo?w=284&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" }, { url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.91MIJuv-a0LG1CJTusYVPQHaEo?w=284&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" }, 
  { url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.RLXQLqOuMFuWxC1F-zijHAHaGl?w=206&h=183&c=7&r=0&o=5&dpr=2&pid=1.7" }, { url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.RLXQLqOuMFuWxC1F-zijHAHaGl?w=206&h=183&c=7&r=0&o=5&dpr=2&pid=1.7" }];
  const dom = div(div({ class: "home" },
    div({ class: "box" },
      text.map(t => p(t)),
      div(
        tag_btn.map(t => button({ class: t.class }, t.text))
      )
    ),
    div({ class: "box1" }, imgs_list.map(i => img({ src: i.url, alt: "img" }))),
    div({ class: "box2" }, p("Let's work together."), p({ style: "font-size: 18px; color: #ccc" }, "Get in touch"))
  ));
  return dom;
};

export {
  Home
}