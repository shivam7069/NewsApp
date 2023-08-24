import React from 'react'

const NewsItem =(props)=> {


  
    let { title, description, imageUrl, newsurl, author, date, source  } = props;
    return (
      <div>
        <div className="card"  >
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position :'absolute',
            right:'0'

          }}>
        <span className=" badge rounded-pill bg-danger" >
              {source}</span>
              </div>
          <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202307/yuvrajf-sixteen_nine.jpg?size=948:533" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "UnKnow" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
        
      </div>
    )
 
}

export default NewsItem