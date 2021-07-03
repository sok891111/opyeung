import React, { Component } from "react";
import '../atoms/Oppost.css'


class Oppost extends Component {
    constructor(props){

        super(props);

    }
    
    render() {
        const post = this.props.post
        return <article className="Post" ref="Post">
   
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

            <div className="Post-image">

                <div className="Post-image-bg">

                    <img alt="Icon Living" src={post.productImg} />

                </div>

            </div>

            <div className="Post-caption">

                <strong>{post.productNm} </strong>
                <p>{post.productDesc}</p>

            </div>
        </article>;

    }

}

export default Oppost;
