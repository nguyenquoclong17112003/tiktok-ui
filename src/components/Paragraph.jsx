import { React, useContext } from "react";
import { themeContext } from "./ThemeProvider";

export default function Paragraph() {
  const context = useContext(themeContext);

  console.log(context);

  return (
    <div className={context.theme} style={{ textAlign: "center", margin: 25 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
      dolores quae inventore architecto, praesentium voluptas, dolor voluptates
      culpa officia, id officiis nostrum est? Maiores aliquid eligendi ab quidem
      architecto!
    </div>
  );
}
