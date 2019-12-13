import React from 'react';
import './VideoItems.css'; 
const VideoItems = ({ video, onVideoSelect }) => {

    //we could pass the call back here,
    //instead of passing the arrow functions inside the onClick function



    return(
        <div onClick={() => onVideoSelect(video)} className=" video-items item">
           <img 
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            />
            
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItems;