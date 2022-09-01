import Main from "../Main";
import Row from "../Row";
import requests from "../../requests/Request";

const Home = () => {
    return (
        <>
            <Main/>
            <Row id={'1'} key={1} title={'Upcoming'} fetchUrl={requests.upcoming}/>
            <Row id={'2'} key={2} title={'Popular'} fetchUrl={requests.popular}/>
            <Row id={'3'} key={3} title={'Top Rated'} fetchUrl={requests.topRated}/>
            <Row id={'4'} key={4} title={'Trending'} fetchUrl={requests.trending}/>
        </>
    )
}

export default Home;