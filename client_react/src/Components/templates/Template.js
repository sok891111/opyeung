
import Opheader from '../molecules/Opheader';
import Oppostlist from '../molecules/Oppostlist';
//atom에서 직접 참조하면 안되는 데 나중에 수정 필요
import Oparrowbutton from '../atoms/Oparrowbutton';

import React, { Component } from 'react';

class template extends Component {
  constructor(props) {

    super(props);

}
  render() {
    return (
     <div>
         <Opheader  />
      <div>
        <Oppostlist Oppostlistdata = {this.props.Oppostlistdata}/>
      </div>
     <Oparrowbutton/>
    </div>
    );
  }
}

export default template;
