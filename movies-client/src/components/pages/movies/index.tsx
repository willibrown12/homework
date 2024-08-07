

import { useContext, useEffect, useState } from 'react';
import MoviesList from './moviesList';
import { getMoviesApi, MovieType } from './service';
import lodash from "lodash"
import { Button, CircularProgress, TextField } from '@mui/material';
import { FavoritesContext, HistoryContext } from '../../context';

export default function MoviesPage() {

    const [movies, setMovies] = useState<Array<MovieType>>([])
    const [history, setHistory] = useState<Array<MovieType>>([])
    const context = useContext(FavoritesContext)
    const contextHistory = useContext(HistoryContext)
    const [inputValue, setInputValue] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        let isSetState = true
        async function searchMovies() {
            try {
                setIsLoading(true)
                const moviesArray = await getMoviesApi(inputValue)
                if (isSetState) {
                    setMovies(moviesArray)
                    setHistory(moviesArray)
                    
                }

            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (inputValue) {
            searchMovies()
        }
        return () => {
            isSetState = false;
        }
    }, [inputValue])

    const searchHandler = lodash.debounce(function (e) {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }, 500)

    return <div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", gap:5}}>
            <TextField onChange={searchHandler} placeholder="search" id="outlined-basic" label="Outlined" variant="outlined" />
            <Button  variant="contained"
  onClick={() => {
   contextHistory.setHistory([...contextHistory.History,...history])
   console.log(contextHistory.History);
   
  
  }}
>
  save history
</Button>
<Button  variant="contained"
  onClick={() => {
   contextHistory.setHistory([])
  
  }}
>
  clear history
</Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap", gap: "20px" }}>
            {isLoading ? <CircularProgress />
                : <MoviesList movies={movies} doSomething={(m: MovieType): void => {
                    const findMovie = context.favorites.find(movie => movie.imdbID === m.imdbID)
                    if (!findMovie) {
                        context.setFavorites([...context.favorites, m])
                    }
                }} />}
        </div>
    </div >
}



