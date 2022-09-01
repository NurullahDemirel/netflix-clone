import {useEffect, useState} from "react";
import requests,{baseImageUrl} from "../requests/Request";
import axios from "axios";
const Main = () => {
    const [movies,setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    const  subStringOverView = (str='',len) => {
        return str.length > len ?  str.slice(0,len) +'...' : str ;
    }
    useEffect(() => {
        axios.get(requests.popular).then(response => {
            setMovies(response.data.results);
        })
    },[]);

    return(
      <div className={'w-full h-[550px] text-white'}>
          <div className={'w-full h-full'}>
              <div className={'absolute bg-gradient-to-r from-black w-full h-[550px]'}></div>
              <img className={'w-full h-full object-fit'} src={`${baseImageUrl}/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className={'absolute w-full h-full top-[20%] p-4 md:p-8'}>
                   <h1 className={'text-3xl md:text-5xl mb-2 font-bold'}>{movie?.title}</h1>
                    <div>
                        <button className={'border py-2 px-5 bg-gray-300 text-black '}>Play</button>
                        <button className={'border py-2 px-5 text-white ml-2'}>Watch Later</button>
                    </div>
                    <p className={'mt-2 text-gray-400'}>
                        Relased : {movie?.release_date}
                    </p>

                    <p className={'w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'}>{subStringOverView(movie?.overview,100)}</p>
                </div>
        </div>
      </div>
    );
}
export default Main;