import {createContext, useState} from "react"

const DarkModeContext = createContext()

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(true)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}} className="w-100">
                {props.children}
            </DarkModeContext.Provider>
        </>
    )
}

export {DarkModeContext,DarkModeProvider}