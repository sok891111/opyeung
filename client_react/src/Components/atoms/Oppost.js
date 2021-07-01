import React, { Component } from "react";
import '../molecules/Oppost.css'


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

                        <img src={post.Postuserface} alt={post.Postusername} />

                    </div>

                    <div className="Post-user-nickname">

                        <span>{post.Postusernickname}</span>

                    </div>

                </div>

            </header>

            <div className="Post-image">

                <div className="Post-image-bg">

                    <img alt="Icon Living" src={post.Postimgsrc} />

                </div>

            </div>

            <div className="Post-caption">

                <strong>{post.Postcaption} </strong>
                <p>내 옷 같은 편안함</p>

            </div>
        </article>;

    }

}

export default Oppost;
