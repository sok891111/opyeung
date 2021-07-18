import React, { Component } from "react";
import '../atoms/OppostDetail.css'
import Hammer from "rc-hammerjs";
import OppostDetail from "./OppostDetail";
import FavoriteIcon from '@material-ui/icons/Favorite';
class Oppost extends Component {
    constructor(props){
        super(props);

        this.state = { 
            swiped: false,
            startX :0,
            startY : 0,
            endX:0,
            endY : 0,
            detailYN : false,
            likeYN : false
         };
        this._swipe = {};
        this.minDistance = -100;
        
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
    }

    _onTouchStart(e) {
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
        if ( absY < this.minDistance ) {
          this.setState({ swiped: true, detailYN:true });
        }
      }
    onDoubleTap=(url)=>{
        window.location.href=url
    }
    onCloseModal =() => {
      this.setState({ detailYN:false });
    }
       
    
    render() {
        const post = this.props.post

        var likeYN = this.state.likeYN
        return (
            <div>

              
              <div className='floatingheart'>
                {likeYN==false ? <FavoriteIcon color="disabled"/> : <FavoriteIcon color="secondary"/>}
             </div>
        
          <article className="Detail" ref="Post"
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

            <Hammer 
              onDoubleTap={()=>this.onDoubleTap(post.url)} 
              onPress ={()=>{ this.setState({likeYN: !this.state.likeYN})}}
            
            
            >
       
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
