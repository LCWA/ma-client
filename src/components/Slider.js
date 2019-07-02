import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators, CardImg,Button
  } from 'reactstrap';

  import '../styles/Slider.css';
  
  const items = [
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/05/12103909/Coding-body-image-.jpg?auto=compress,format,&crop=faces,entropy,edges&fit=crop&q=60&w=750&h=460',

    },
    {
      src: 'https://www.hastac.org/sites/default/files/styles/post_image/public/upload/images/post/1_kbflq2yypdzuzbdkwjq0g.jpeg?itok=pj0DJEiT',

    },
    {
      src: 'https://www.bloemfonteincourant.co.za/wp-content/uploads/2018/07/digital-coding-785.jpg',

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
                <div className="row mx-auto container py-5">
                  <div className="col-lg-6  col-12 d-flex justify-content-center flex-column">
                  <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                      <div className="d-flex justify-content-center">
                          <Button className="btn btn-primary my-2 my-sm-0">Course online</Button>
                      </div>
                  </div>
                  <div className="col-lg-6 col-12 d-flex justify-content-center flex-column">
                      <CardImg top width="100%" src="https://www.virversity.com/images/dowell/courses/createacourse/oc/courseintroimage.jpg" alt="Card image cap" />
                      <div className="d-flex justify-content-center">
                          <Button className="btn btn-primary my-2 my-sm-0">Book now</Button>
                      </div>
                  </div>
                </div>
              </div>
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
