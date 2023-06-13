import van from "../lib/van-0.12.2";
import { Router } from "../lib/router/route";
import { Home } from "./views/home/index";
import { Profile } from "./views/profile/index";
import { Contact } from "./views/contact/index";
import "./app.scss";

const { div, footer, nav, main, ul, li, a } = van.tags;
const Nav = () => {
  const bg_id = van.state(0);
  const nav_data = [{ title: "Home", href: "/home" }, { title: "Profile", href: "/profile" }, { title: "Contact", href: "/contact" },];
  const dom = nav({ class: "nav" }, ul(nav_data.map((n, idx) => li(
    a(
      {
        href: n.href, class: {
          deps: [bg_id, idx],
          f: (id, old_id) => `${id === old_id ? "active" : ""}`
        },
        onclick: () => { bg_id.val = idx; },
      },
      n.title
    )
  ))));
  return dom;
};

const main_comp = main({class: "main"});
{
  const router = new Router();
  router.route("/", () => {
    return Home().innerHTML;
  });
  router.route("/home", () => {
    return Home().innerHTML;
  });
  router.route("/profile", () => {
    return Profile().innerHTML;
  });
  router.route("/contact", () => {
    return Contact().innerHTML;
  });
  router.init(document.body, main_comp as HTMLElement);
}

export const App = div({ id: "app" }, Nav(), main_comp, footer({ class: "footer" }, "footer"));