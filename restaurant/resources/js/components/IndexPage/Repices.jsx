import React from 'react';

class Repices extends React.Component {

    render() {
        return (
            <div>
                <div className="recepie_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single_recepie text-center">
                                    <div className="recepie_thumb">
                                        <img src="img/recepie/recpie_1.png" alt="" />
                                    </div>
                                    <h3>Egg Manchurian</h3>
                                    <span>Appetizer</span>
                                    <p>Time Needs: 30 Mins</p>
                                    <a href="#" className="line_btn">View Full Recipe</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single_recepie text-center">
                                    <div className="recepie_thumb">
                                        <img src="img/recepie/recpie_2.png" alt="" />
                                    </div>
                                    <h3>Pure Vegetable Bowl</h3>
                                    <span>Appetizer</span>
                                    <p>Time Needs: 30 Mins</p>
                                    <a href="#" className="line_btn">View Full Recipe</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single_recepie text-center">
                                    <div className="recepie_thumb">
                                        <img src="img/recepie/recpie_3.png" alt="" />
                                    </div>
                                    <h3>Egg Masala Ramen</h3>
                                    <span>Appetizer</span>
                                    <p>Time Needs: 30 Mins</p>
                                    <a href="#" className="line_btn">View Full Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="latest_trand_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="trand_info text-center">
                                    <p>Thousands of recipes are waiting to be watched</p>
                                    <h3>Discover latest trending recipes</h3>
                                    <a href="#" className="boxed-btn3">View all Recipes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        );
    }
}

export default Repices;
