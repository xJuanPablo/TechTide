import { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
    </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
