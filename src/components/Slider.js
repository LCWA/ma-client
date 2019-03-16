import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, CardImg,Button
  } from 'reactstrap';

  import './Slider.css';
  
  const items = [
    {
      src: 'https://www.opencollege.info/wp-content/uploads/2016/02/relaxation-skills.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'http://nzbirdsonline.org.nz/sites/all/files/1200417spurwing_spurs_%20PBattley_IMG_0976.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-158225.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  
  class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
      const slides = items.map((item) => {
        return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <div className="carousel-img" style={{backgroundImage: `url(${item.src})`}} >
                <div className="row mx-auto container pt-5">
                  <div className="col-6 d-flex justify-content-center flex-column">
                      <CardImg top width="100%" src="https://wallimpex.com/data/out/564/animal-images-9256481.jpg" alt="Card image cap" />
                      <div className="d-flex justify-content-center">
                          <Button>Course online</Button>
                      </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center flex-column">
                      <CardImg top width="100%" src="https://wallimpex.com/data/out/564/animal-images-9256481.jpg" alt="Card image cap" />
                      <div className="d-flex justify-content-center">
                          <Button>Course online</Button>
                      </div>
                  </div>
                </div>
              </div>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
      });
  
      return (
        <div>
          <h1 className="text-center my-3">Get ready for your first tech job now – it’s easy, quick and guaranteed</h1>
          <Carousel
            className="slider"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  
  
  export default Slider;
