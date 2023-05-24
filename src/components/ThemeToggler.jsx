import React, { useContext } from 'react'
import context from "../context/context";

function ThemeToggler() {
    const [theme, setTheme] = useContext(context);
    return (
        <div style={{ position: "absolute", top: "10px", left: "10px" }}>
            <button
                style={{ padding: "5px" }}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "Turn Off" : "Lights On"}
            </button>
        </div>
    )
}

export default ThemeToggler
