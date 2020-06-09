import React from 'react';

class VideoArea extends React.Component {

    render() {
        return (
            <div className="recepie_videoes_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="recepie_info">
                                <h3>Recipe videos
                                that never misses
                    any portion</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                                <div className="video_watch d-flex align-items-center">
                                    <a className="popup-video" href="https://www.youtube.com/watch?v=lr6AMBsjxrY"> <i className="ti-control-play"></i> </a>
                                    <div className="watch_text" >
                                        <h4>Watch Video</h4>
                                        <p>You will love our execution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="videos_thumb">
                                <div className="big_img">
                                    <img src="img/video/big.png" alt="" />
                                </div>
                                <div className="small_thumb">
                                    <img src="img/video/small_1.png" alt="" />
                                </div>
                                <div className="small_thumb_2">
                                    <img src="img/video/2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoArea;
