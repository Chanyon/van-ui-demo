import van from "../lib/van-0.12.2";
import { Router } from "../lib/router/route";
import { Home } from "./views/home/index";
import { Profile } from "./views/profile/index";
import { Contact } from "./views/contact/index";
import "./app.scss";

const { div, footer, nav, main, ul, li, a, span } = van.tags;
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

const Footer = () => {
  const logo_div = div({class: "logo"});
  logo_div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 72 72"><g fill="#6A462F"><ellipse cx="36" cy="29.763" rx="6.263" ry="4.026"/><ellipse cx="36" cy="36.921" rx="4.474" ry="2.876"/><ellipse cx="36" cy="50.342" rx="6.263" ry="10.29"/></g><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><path d="m31.526 34.684l-8.052-3.579l-2.684-7.158m19.684 10.737l8.052-3.579l2.685-7.158M40.474 38.263h9.842L53 35.579m-21.474 2.684h-9.842L19 35.579m13.421 4.579l-9.842 8.947l.895 7.158m16.105-16.105l10.737 8.947l-.895 7.158M33.838 25.737l-1.417-3.579l.895-1.79m4.473 5.369l1.417-3.579l-.895-1.79"/><ellipse cx="36" cy="29.763" rx="6.263" ry="4.026"/><ellipse cx="36" cy="36.921" rx="4.474" ry="2.876"/><ellipse cx="36" cy="50.342" rx="6.263" ry="10.29"/></g></svg>`;
  return footer({class: "footer"}, 
      div({class: "left"}, logo_div, span("@HELLO 2023")),
      div({class: "right"}, a({href:"#"}, "Twitter"), a({href: "#"}, "Linkedin"), a({href:"#"}, "Mail")),
  );
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

export const App = div({ id: "app" }, Nav(), main_comp, Footer());