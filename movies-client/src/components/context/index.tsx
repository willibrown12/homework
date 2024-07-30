// @ts-nocheck

import { createContext, useState } from 'react';
import { MovieType } from '../pages/movies/service';
type FavoritesType = {
    favorites: Array<MovieType>,
    setFavorites: (arr: Array<MovieType>) => void
}

type HistoryType = {
    History: Array<MovieType>,
    setHistory: (arr: Array<MovieType>) => void
}
type SettingsType = {
    toggleTime: boolean,
    setToggleTime: (p: boolean) => void
}
export const FavoritesContext = createContext<FavoritesType>({} as FavoritesType)
export const SettingsContext = createContext<SettingsType>({} as SettingsType)
export const HistoryContext = createContext<HistoryType>({} as HistoryType)


export function ContextWrapper({ children }: { children: any }) {
    let favoritesInitialData = []
    let HistoryInitialData = []
    let timeInitialData = false;
    try {
        favoritesInitialData = JSON.parse(localStorage.getItem("favorites")) || []
        HistoryInitialData = JSON.parse(localStorage.getItem("history")) || []
        
        let value = localStorage.getItem("time")
        if (value === 'false') {
            timeInitialData = false;
        } else {
            timeInitialData = true
        }
    } catch (error) {

    }
    const [favorites, setFavorites] = useState(favoritesInitialData as Array<MovieType>)
    const [History,  setHistory] = useState(HistoryInitialData as Array<MovieType>)
    const [toggleTime, setToggleTime] = useState(timeInitialData)

    function setFavoritesWrapper(favorites: Array<MovieType>) {
        setFavorites(favorites)
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    function setToggleTimeWrapper(toggleTime: boolean) {
        setToggleTime(toggleTime)
        localStorage.setItem("time", toggleTime)
    }
    function setHistoryWrapper(history: Array<MovieType>) {
        setHistory(history)
         const filtered_input = history.filter((value, index, self) =>
            index === self.findIndex((t) => (
              t.imdbID === value.imdbID
            ))
          )
          setHistory(filtered_input)
        localStorage.setItem("history", JSON.stringify(history))
    }
  

    return <>
        <SettingsContext.Provider value={{ toggleTime, setToggleTime: setToggleTimeWrapper }}>
        <HistoryContext.Provider value={{ History, setHistory: setHistoryWrapper }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites: setFavoritesWrapper }}>
                {children}
            </FavoritesContext.Provider>
            </HistoryContext.Provider >
        </SettingsContext.Provider>
    </>
}