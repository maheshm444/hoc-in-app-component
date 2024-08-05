import React, { useState, useEffect, ReactNode } from "react";

const withTheme = (Component: ReactNode) => {
  return (props: any) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () =>
      theme === "dark" ? setTheme("light") : setTheme("dark");
    return <Component {...props} theme={theme} setTheme={toggleTheme} />;
  };
};

interface Props {
  theme: string;
  setTheme: () => void;
}

function App({ theme, setTheme }: Props) {
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
