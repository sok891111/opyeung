import React, { Component } from "react";
import Oppost from '../atoms/Oppost'
import Slider from "react-slick";
import '../molecules/Oppostlist.css';

class Oppostlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }


  onSwipe = () => {
    alert('스와이프')
  }
  render() {

    function randomArrayShuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 0,
      touchThreshold: 10,
      beforeChange: (current, next) => this.setState({ Oppostlistdata: randomArrayShuffle(this.props.Oppostlistdata), index: next })
    };

    return (

      <div className='SliderWrapper' >

        <Slider ref={slider => (this.slider = slider)} {...settings}  >

          {this.props.Oppostlistdata.map((item, index) => {
            return (
              <Oppost post={item} />

            )
          }
          )
          }
        </Slider>
      </div>
    )

  }

}

export default Oppostlist;
