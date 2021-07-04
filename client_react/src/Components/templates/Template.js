
import Opheader from '../molecules/Opheader';
import Oppostlist from '../molecules/Oppostlist';
//atom에서 직접 참조하면 안되는 데 나중에 수정 필요
import Oparrowbutton from '../atoms/Oparrowbutton';

import OppostDetail from '../atoms/OppostDetail';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Y: 0,
      detailYN: false
    }
  }
  componentDidMount() {
    // 스크롤링 이벤트 추가
    window.addEventListener("scroll", this._onScroll);
  }


  _onScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop)
    this.setState({
      detailYN: (scrollTop >= this.state.Y) || (scrollTop > 10),
      Y: scrollTop
    })
    console.log(this.refs.current)
  }

  state = {
    width: '100%',
    height: '100%'
  }

  /*
  componentDidMount() {
    fetch('http://34.83.107.247:8888/product/list')
      .then(res => res.json())
      .then(result => {
        console.log('sfsf')
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }
  */
  handleDrag = () => {
    console.log('드래그 완료')
    this.setState({ width: 0, height: 0 })
  }
  render() {
    const detailPost_active = {
      zindex: 1,
      position: 'absolute',
      top: '0px',
      width: '100%',
      height: '100%',
      opacity: "1",
      transition: "opacity 5000ms",
    };
    return (
      <div>
        <Opheader />
        <div className='PostContainer' ref='PostContainer'>
          <Oppostlist Oppostlistdata={this.props.Oppostlistdata} />
        </div>
        <div style={this.state.detailYN ? detailPost_active : { top: '1000px', width: '0px', height: '0px' }} className='DetailPostContainer' ref='DetailPostContainer'>
          <OppostDetail />
        </div>
      </div>
    );
  }
}


export default template;
