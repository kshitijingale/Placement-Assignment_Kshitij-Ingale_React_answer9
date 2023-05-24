import React, { useContext } from 'react'
import context from '../context/context'
import theme from '../theme'


function HeroSection() {
    const [themeMode, setThemeMode] = useContext(context);
    const currentTheme = theme[themeMode];
    return (
        <div style={{ textAlign: "center", height: "100vh", backgroundColor: `${currentTheme.backgroundColor}` }}>
            <h1 style={{ color: `${currentTheme.textColor}` }}>Context API Theme Switcher</h1>
            <p style={{ color: `${currentTheme.textColor}` }}>This is a Paragraph</p>
            <button onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}>My Button</button>
            {
                console.log(currentTheme.textColor)
            }
        </div>
    )
}

export default HeroSection
