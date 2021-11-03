import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./firstpart.css";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Firstpart({ title, fetchUrl, bigone }) {
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([]);
    const [ourvdoid, setourvdoid] = useState("")

    const options = {
        //lets keep this empty for the time being
    }
    const playTrailer = (movie) => {
        if (ourvdoid) {
            setourvdoid('');
        }
        else {
            movieTrailer(movie?.title || movie?.name || movie?.originalname || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url.search));
                    setourvdoid(urlParams.get('v'));
                }).catch((error) => console.log(error))
        }
    }

    useEffect(() => {
        //api call
        async function fetchOurData() {
            const answer = await axios.get(fetchUrl)
            console.log(answer.data.results)
            setMovies(answer.data.results)
            return answer;
        }
        fetchOurData();
    }, [fetchUrl]);

    return (
        <>
            <div className="container">
                <h2>{title}</h2>
                <div className="first">
                    {movies.map((movie) => {
                        return (<>
                            <div className='nameandpicflex'>
                                <img className={`pics ${bigone && "picslarge"}`} src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
                                <h4 class="movienames">{movie?.title || movie?.name || movie?.originalname}</h4>
                                <button onClick={playTrailer(movie)} id="trailerButton">Watch Trailer</button>
                            </div>
                            {ourvdoid && <Youtube videoId="LLqTvrV5MBE" opts={options} />}
                        </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Firstpart
