import {baseImageUrl} from "../requests/Request";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useState} from "react";

const Movie = ({item}) => {
    const [like,isLike] = useState(false);
    return(
      <div className={'w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'}>
          <img src={`${baseImageUrl}/${item.backdrop_path}`} alt={item.title} className={'w-full h-auto block'}/>
          <div className={'absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100 items-center'}>
              <p className={'whitespace-normal text-xs  md:text-sm flex justify-center items-center text-center h-full w-full font-bold'}> {item?.title}</p>
              <button className={'absolute top-4 left-4'} onClick={() => isLike(!like)}>
                  {
                      like ? <FaHeart/> : <FaRegHeart/>
                  }
              </button>
          </div>
      </div>
  )
}

export default Movie;