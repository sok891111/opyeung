import React from 'react'
import { useRef,useCallback,useEffect } from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function OppostDetail() {
    const animatedItem = useScrollFadeIn();
    return (
        <article className="Post">
   <div className="Post-image">
   
       <div className="Post-image-bg">
       <img  alt="Icon Living" src='https://cdn-naning9.bizhost.kr/files/goodsm/54511/1558503649_0.jpg'/>
   
          
       </div>
   
   </div>
   </article>
    )
}

