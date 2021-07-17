import React, { Component } from "react";
import '../atoms/Oppost.css'
import ReactTouchEvents from "react-touch-events";
import Hammer from "rc-hammerjs";
import OppostDetail from "./OppostDetail";

class Oppost extends Component {
    constructor(props){
        super(props);

        this.state = { 
            swiped: false,
            startX :0,
            startY : 0,
            endX:0,
            endY : 0,
            detailYN : false
         };
        this._swipe = {};
        this.minDistance = -3;
        
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
    }

    _onTouchStart(e) {
        console.log('start')
        const touch = e.touches[0];
        this._swipe = { x: touch.clientX, y: touch.clientY };
        this.setState({ swiped: false , startX : this._swipe.x, startY : this._swipe.y});
      }
    
      _onTouchMove(e) {
        if (e.changedTouches && e.changedTouches.length) {
          const touch = e.changedTouches[0];
          this._swipe.swiping = true;
        }
      }
    
      _onTouchEnd(e) {
        const touch = e.changedTouches[0];
        const absY = touch.clientY - this.state.startY
        const absX = touch.clientX - this.state.startX
        console.log('End'+absY)
        console.log(absY < this.minDistance)
        if ( absY < this.minDistance ) {
          this.setState({ swiped: true, detailYN:true });
        }
      }
    onDoubleTap=(url)=>{
        window.location.href=url
    }
    onCloseModal =() => {
      this.setState({ detailYN:false });
      console.log(this.state.detailYN)
    }
       
    
    render() {
        const post = this.props.post


        return (
            <div>
          <article className="Post" ref="Post"
            onTouchStart={(e)=>this._onTouchStart(e)}
            onTouchMove={(e)=>this._onTouchMove(e)}
            onTouchEnd={(e)=>this._onTouchEnd(e)}  
            >
        
            <header>
                <div className="Post-user">
                    <div className="Post-user-profilepicture">
                        <img src={post.siteIcon} alt={post.siteNm} />
                    </div>
                    <div className="Post-user-nickname">
                        <span>{post.siteNm}</span>
                    </div>
                </div>
            </header>

            <Hammer onDoubleTap={()=>this.onDoubleTap(post.url)} >
       
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Icon Living" src={post.productImg} />
                </div>
            </div>
             </Hammer>
            <div className="Post-caption">
                <strong>{post.productNm} </strong>
                <p>{post.productDesc}</p>
            </div>
        </article>
         
         <OppostDetail  
          post={post}
          detailYN={this.state.detailYN}
          onCloseModal={this.onCloseModal}
           onTouchStart={(e)=>this._onTouchStart(e)}
            onTouchMove={(e)=>this._onTouchMove(e)}
            onTouchEnd={(e)=>this._onTouchEnd(e)} 
              />
        </div>
        )
    }
}

export default Oppost;
