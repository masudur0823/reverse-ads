import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// slider image
import si1 from '../../assets/images/homePage/news-slider-1.png'
import si2 from '../../assets/images/homePage/news-slider-2.png'
import si3 from '../../assets/images/homePage/news-slider-3.png'
import si4 from '../../assets/images/homePage/news-slider-4.png'
import si5 from '../../assets/images/homePage/news-slider-5.png'
import si6 from '../../assets/images/homePage/news-slider-6.png'
// slider image

// button
import newsPrev from '../../assets/images/homePage/news-left-arrow.svg'
import newsNext from '../../assets/images/homePage/new-right-arrow.svg'
// button

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



const items = [
    <div className="item" data-value="1">
        <img src={si1} className="news_img" alt="" />
    </div>,
    <div className="item" data-value="1">
        <img src={si2} className="news_img" alt="" />
    </div>,
    <div className="item" data-value="1">
        <img src={si3} className="news_img" alt="" />
    </div>,
    <div className="item" data-value="1">
        <img src={si4} className="news_img" alt="" />
    </div>,
    <div className="item" data-value="1">
        <img src={si5} className="news_img" alt="" />
    </div>,
    <div className="item" data-value="1">
        <img src={si6} className="news_img" alt="" />
    </div>,
];

const navItem = (item, i) => {
    return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

class NewsCard extends Component {
    render() {
        return (
            <div>
                <AliceCarousel
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    infinite
                    mouseTracking
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    responsive={responsive}
                    ref={(el) => (this.Carousel = el)}
                />
                <nav>{items.map(navItem)}</nav>
                <div>
                    <img src={newsPrev} className="newsBtn newsPrev" onClick={() => this.Carousel.slidePrev()} alt="" />
                    <img src={newsNext} className="newsBtn newsNext" onClick={() => this.Carousel.slideNext()} alt="" />
                </div>
            </div>
        );
    }
}

export default NewsCard;