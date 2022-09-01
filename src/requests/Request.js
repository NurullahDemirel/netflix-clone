const apiKey = '255573b2f585052b57a7f3b96b22a6ed';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTU1NzNiMmY1ODUwNTJiNTdhN2YzYjk2YjIyYTZlZCIsInN1YiI6IjYzMGRhY2Y0MTg4NjRiMDA4MGU1OTZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.loe61QXhvwf4B5RZrnG9jrnPDZHBCz6A1C9I44tpQ9U';
const mainUrl = 'https://api.themoviedb.org/3';
export const baseImageUrl = 'https://image.tmdb.org/t/p/original';
const requests = {
    upcoming : `${mainUrl}/movie/upcoming?api_key=255573b2f585052b57a7f3b96b22a6ed`,
    topRated : `${mainUrl}/movie/top_rated?api_key=255573b2f585052b57a7f3b96b22a6ed&language=en-US&page=1`,
    popular : `${mainUrl}/movie/popular?api_key=255573b2f585052b57a7f3b96b22a6ed&language=en-US&page=1`,
    trending:  `${mainUrl}/trending/all/day?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
}
export default requests;