import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "./Movie";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";

const Row = ({fetchUrl, title,id}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then(res => {
            setMovies(res.data.results);
        })
    })
    const slideLeft = () => {
      var silders= document.getElementById('slider'+id);

        silders.scrollLeft = silders.scrollLeft - 500;
    }

    const slideRight = () => {
        var silders = document.getElementById('slider'+id);

        silders.scrollLeft = silders.scrollLeft + 500;
    }
    return (
        <>
            <h2 className={'text-white font-bold md:text-xl p-4'}>{title}</h2>

            <div className={'relative flex items-center group'}>
                <FaChevronRight className={'bg-white rounded-full absolute opacity-50 hover:opacity-100 bg-white  cursor-pointer z-10 hidden group group-hover:block right-0'} size={40} onClick={slideLeft} />
                <div id={'slider'+id} className={'w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'}>
                    {
                        movies.map((item,index) => (
                            <Movie item={item}/>
                        ))
                    }
                </div>
                <FaChevronLeft  className={'bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group group-hover:block left-0'} size={40} onClick={slideRight}/>

            </div>
        </>

    )
}

export default Row;