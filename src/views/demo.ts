import van from "../../lib/van-0.12.2";
const { div, button, ul, li, input } = van.tags;
const {table, tbody, tr, td,thead} = van.tags;

const List = ({items}: {items: Array<string>}) => ul(items.map(it => li(it)));
const Table = ({head, data}: {head: Array<string>, data: Array<Array<string>>}) => {
  return table(
    head ? thead(tr(head.map(h => td(h)))) : [],
    tbody(data.map(row => tr(row.map(col => td(col)))))
  );
};

const Counter = () => {
  const count_val = van.state(12);
  // count_val.onnew((v, old_val) => console.log(`Counter: ${old_val} -> ${v}`));
  const text_dom1 = div(count_val);
  const ipt = input({type: "number", value: count_val, disabled: false});
  const dom3 = div(
    {style: {deps:[count_val], f: c => `font-size:${c}px; color: rgb(50,${c},255);`}},
    "Text"  
  );
  const btn1 = button({onclick: () => count_val.val++,class: "button is-primary"}, "ICN");
  return div({style: "margin-top: 20px"},text_dom1,ipt,dom3,btn1);
};

const ConnectedProps = () => {
  const value = van.state("");
  return div(
    "binding",
    input({type: "text", value, oninput: (e: any) => value.val = e.target.value}),
    div(value),
  );
};

const Hello = () => {
  const table_data = {
    head: ["id", "name", "country"],
    data: [["1", "John", "US"], ["2", "CCC", "CH"]],
  };
  const onclick = {
    onclick() {
      alert("hello van");
    },
  };

  return div(
    List({items: ["one", "two", "three"]}),
    Table(table_data),
    button({...onclick},"button-1"),
    Counter(),
    ConnectedProps(),
  );
};

export {
  Hello
}

// import "virtual:uno.css";
// const { div, button, pre } = van.tags;
// const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

// const Run = ({sleepMs}:{sleepMs: number}) => {
//   const headingSpaces = van.state(40);
//   const trailing = van.state(0);

//   const animate = async () => {
//     while (headingSpaces.val > 0) {
//       await sleep(sleepMs);
//       headingSpaces.val -= 1;
//       trailing.val += 1;
//     }
//   };
//   animate();

//   const helloText = van.bind(headingSpaces, trailing, 
//     (h,t) => `${" ".repeat(h)}HelloVanJs!${"_".repeat(t)}`
//   );
//   return div(pre(helloText));
// };

// //component
// const Hello = () => {
//   const dom = div();
//   return div(dom, [
//     button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "helloA"), 
//   ]);
// };
// import { Hello } from "./view/demo";