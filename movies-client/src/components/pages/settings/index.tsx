import { Switch } from "@mui/material";
import { SettingsContext } from "../../context";
import { useContext } from "react";

export default function SettingsPage() {
    const settingsContext = useContext(SettingsContext)
    return <>
        <div>
            <h1> Settings</h1>
            <h2> Select Local / UTC time:  <Switch checked={settingsContext.toggleTime} onChange={() => {
                settingsContext.setToggleTime(!settingsContext.toggleTime)
            }} /></h2>
        </div>
    </>
}