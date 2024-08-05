import React, { useState, useEffect } from "react";

const withTheme = (Component) => {
  return (props) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () =>
      theme === "dark" ? setTheme("light") : setTheme("dark");
    return <Component {...props} theme={theme} setTheme={toggleTheme} />;
  };
};

function App({ theme, setTheme }) {
  return (
    <div
      style={{
        background: theme === "dark" ? "red" : "blue",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={setTheme}>Toggle theme</button>
    </div>
  );
}

export default withTheme(App);
