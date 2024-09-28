import { useCallback, useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mounted from "./components/Mounted";
import UseRef from "./components/UseRef";
import Memo from "./components/Memo";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import Content from "./components/Content";
import Home from "./components/Home";
import News from "./components/News";
import Contact from "./components/Contact";
import "./App.css";
import { ThemeProvider, themeContext } from "./components/ThemeProvider";

function App() {
  // const [mounted, setMounted] = useState(false);
  // const [count, setCount] = useState(0);
  // const handleIncrease = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const context = useContext(themeContext);

  return (
    <>
      {/* <UseRef />
      <Memo count={count} onIncrease={handleIncrease} />
      <h2>{count}</h2>
      <UseMemo />
      <UseReducer /> */}

      <div style={{ padding: 20 }}>
        <button onClick={context.handleTheme}>Toggle Themes</button>
        <Content />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

/*{ {mounted && <Mounted />}

<button onClick={() => setMounted(!mounted)}>Toggle</button> } */
export default App;
