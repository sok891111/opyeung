
import Opheader from '../molecules/Opheader';
import Oppostlist from '../molecules/Oppostlist';
//atom에서 직접 참조하면 안되는 데 나중에 수정 필요
import Slider from "react-slick";
import OppostDetail from '../atoms/OppostDetail';
import React, { Component } from 'react';

import Hammer from "rc-hammerjs";
import ReactDOM from 'react-dom';
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Y: 0, 
      detailYN: false,
    }
   }
  state = {
    width: '100%',
    height: '100%'
  }
  render() {
   
    const _config_header ={
      LoginActive : false,
      Textlogo : false,
      Imglogo : true
    }


    return (
      <div>
        <Opheader config = {_config_header}  />
         <div style={{marginTop:'82px'}}>
          <Oppostlist Oppostlistdata={this.props.Data}/>
        </div>
      </div>
    );
  }
}


export default Template;
