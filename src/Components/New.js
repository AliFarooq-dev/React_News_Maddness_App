import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newitems from './Newitems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const New = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const capitalizer = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    useEffect(() => {
        document.title = `News - ${capitalizer(props.category)}`;
    }, [props.category]);

    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setloading(false);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, []);
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setloading(false);
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    }
    return (
        <>
            <div className="container my-3">
                <div className="text-center" style={{ margin: '30px 30px', marginTop: '70px' }}>
                    <h3>NewsMania - Top Headlines On {capitalizer(props.category)}</h3>
                </div>
                {loading && <  Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>

                    <div className="row mx-2 my-2">
                        {articles.map((element) => {
                            return <div className="col-md-3 mx-4" key={element.url}>
                                <Newitems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
New.propsType = {
    language: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
New.defaultProps = {
    language: 'en',
    category: 'general',
    pageSize: 21
}
export default New;

 // const handlePrev = () => {
    //     update();
    //     setpage(page - 1);
    // }
    // const handleNext = () => {
    //     if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
    //         update();
    //         setpage(page + 1);
    //     }
    // }