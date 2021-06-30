
import Opheader from '../molecules/Opheader';
import Oppostlist from '../molecules/Oppostlist';

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
    </div>
    );
  }
}

export default template;
