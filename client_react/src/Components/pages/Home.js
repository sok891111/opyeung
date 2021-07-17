import React, { Component } from 'react'
import Template from '../templates/Template'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            Data : []
        }
     }

     
  componentDidMount() {
    fetch('http://34.83.107.247:8888/product/list')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({
          isLoaded: true,
          Data: result
        });
      });;
  };
    render() {    
        return (         
           <Template Data={this.state.Data} />        
        )
    }
}
