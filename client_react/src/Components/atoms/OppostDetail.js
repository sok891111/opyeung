import React, { Component } from "react";
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';


import Hammer from "rc-hammerjs";
export default class OppostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiped: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      data: [],
      isLoaded: false,
      productCode: this.props.post.productCode,
      detailYN : true,
    };
  }


  componentDidMount() {
      document.body.style.overflowX = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      

    var siteId = this.props.post.siteId
    var productCode = this.props.post.productCode
    console.log('상품명' + productCode)
    fetch('http://34.83.107.247:8888/product/imgList?siteId=' + siteId + '&productCode=' + productCode)
      .then(res => res.json())
      .then(result => {
        console.log('호출')
            this.setState({
          isLoaded: true,
          data: result
        });
      });;
  };
  componentWillReceiveProps(nextProps) {
    // this will run every time the props change - and possibly in addition to this, so we need to check for prop changes
    if (this.props.post !== nextProps.post) {
      var siteId = nextProps.post.siteId
      var productCode = nextProps.post.productCode
      fetch('http://34.83.107.247:8888/product/imgList?siteId=' + siteId + '&productCode=' + productCode)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          this.setState({
            isLoaded: true,
            data: result
          });
        });;
    }
  }
  componentWillUnmount() {
    document.body.style.overflow = 'unset';
}


  render() {
      const data = this.state.data
      return (
 
        <Modal
          style={{
            overflow: 'scroll', top: '79px',
           
          }}
          hideBackdrop={true}
          open={(this.props.detailYN)}
          onClose={this.props.onCloseModal}
        >
        <Slide direction="up" 
                in={(this.props.detailYN)}
                
          {...(this.props.detailYN ? { timeout: 500 } : {})}
           > 
          <Hammer onDoubleTap={this.props.onCloseModal} >
            <article className="PostDetail">
              <div className="Post-image">
                <div className="Post-image-bg">

                  {data.map((item, index) => {
                    return (
                      <img alt="Icon Living" src={item.detailImg} />

                    )
                  }
                  )}
                </div>
              </div>
            </article>

          </Hammer>
      </Slide>

        </Modal>
      )
  }
}

