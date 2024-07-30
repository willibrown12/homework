import { useContext } from "react"
import { SettingsContext } from "../../context"

export function Home() {
    const settingsContext = useContext(SettingsContext)
    return <div>
        <h1>Home</h1>
        {settingsContext.toggleTime ? new Date().toLocaleString() : new Date().toISOString()}
    </div>
}