import React from 'react';

const Newitems = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div >
            <div className="card" style={{ width: '270px' }} >
                <img src={imgUrl !== null ? imgUrl : "https://www.coindesk.com/resizer/F2lUOYX4sKLYLYy86TkfvXloJ7s=/1200x628/cloudfront-us-east-1.images.arcpublishing.com/coindesk/J7TH73HNI5BUZAUALAMFR4EEUM.png"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title !== null ? title.slice(0, 55) : ""}...</h5>
                    <p className="card-text">{description !== null ? description.slice(0, 100) : ""}...</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: 0, right: 0 }}>
                        <span className=" badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <p className='card-text' ><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target={`_blank`} className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newitems
