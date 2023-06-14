class Router {
  //@ts-ignore
  routeView: HTMLElement;
  routes: {};
  constructor() {
    this.routes = {};
  }
  route(path: string, callback: Function) {
    //@ts-ignore
    this.routes[path] = () => this.routeView.innerHTML = callback() || "";
  }

  init(root: HTMLElement, rootView: HTMLElement) {
    this.routeView = rootView;
    this.refresh();
    root.addEventListener("click", (e:any) => {
      if (e.target.nodeName === "A") {
        e.preventDefault();
        history.pushState(null, "", e.target.getAttribute("href"));
        this.refresh();
      }
    });

    addEventListener("popstate", () => this.refresh(), false);
    // addEventListener("hashchange", () => this.refresh(), false);
  }

  refresh() {
    const path = location.pathname;
      //@ts-ignore
    if (this.routes[path]) {
        //@ts-ignore
      this.routes[path]();
    } else {
      this.routeView.innerHTML = ``;
    }
    // const hash = location.hash;
    // if (this.routes[hash]) {
    //   this.routes[hash]();

    // } else {
    //   this.routeView.innerHTML = ``;
    // }
  }
}

export { Router }