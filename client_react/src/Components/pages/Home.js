import React, { Component } from 'react'
import template from '../templates/Template'

export default class Home extends Component {
    constructor(props) {
        super(props);
     }

     
    render() {    

        const Oppostlistdata =[
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"11",
               "categoryDesc":"ONLY 9",
               "productId":203,
               "productCode":70516,
               "url":"https://www.naning9.com/shop/view.php?index_no=70516",
               "productNm":"라슈츠 나염반팔티",
               "productDesc":"#나염반팔티 #상의 #반팔티셔츠 #나염티셔츠 #오버핏 #루즈핏",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/70516/1623219591_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"2E04",
               "categoryDesc":"OPS&SKIRT",
               "productId":1069,
               "productCode":66996,
               "url":"https://www.naning9.com/shop/view.php?index_no=66996",
               "productNm":"모헤르 후드스커트세트",
               "productDesc":"#세트 #후드세트 #스커트세트 #꾸안꾸룩",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/66996/1611645040_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"0S",
               "categoryDesc":"ALL",
               "productId":712,
               "productCode":70513,
               "url":"https://www.naning9.com/shop/view.php?index_no=70513",
               "productNm":"템모스 와플자수세트",
               "productDesc":"#맨투맨 #팬츠 #반바지 #세트 #데일리 #홈웨어 #트레이닝웨어 #반바지 #자수 #캐쥬얼 #스포티 #반팔",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/70513/1623131798_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"11",
               "categoryDesc":"ALL",
               "productId":211,
               "productCode":67836,
               "url":"https://www.naning9.com/shop/view.php?index_no=67836",
               "productNm":"머피크 데님팬츠",
               "productDesc":"#데님팬츠 #보이핏팬츠 #배기팬츠 #데님배기팬츠 #하의 #데님 #팬츠",
               "price":49800,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/67836/1617085726_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"0T02",
               "categoryDesc":"자켓",
               "productId":620,
               "productCode":62668,
               "url":"https://www.naning9.com/shop/view.php?index_no=62668",
               "productNm":"카리니 노카라롱자켓",
               "productDesc":"#노카라 #롱자켓 #아우터 #간절기 #자켓 #데일리",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/62668/1588139666_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"0T",
               "categoryDesc":"ALL",
               "productId":509,
               "productCode":68184,
               "url":"https://www.naning9.com/shop/view.php?index_no=68184",
               "productNm":"언디드 후드린넨자켓",
               "productDesc":"#린넨후드집업 #후드린넨자켓 #아우터 #자켓 #집업 #린넨 #후드",
               "price":39800,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/68184/1622530530_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"1103",
               "categoryDesc":"스커트&원피스",
               "productId":438,
               "productCode":67045,
               "url":"https://www.naning9.com/shop/view.php?index_no=67045",
               "productNm":"끄메르 트임밴딩스커트",
               "productDesc":"#치마 #스커트 #밴딩 #일자 #슬릿 #트임",
               "price":35000,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/67045/1615264561_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"0T",
               "categoryDesc":"OUTER",
               "productId":529,
               "productCode":68621,
               "url":"https://www.naning9.com/shop/view.php?index_no=68621",
               "productNm":"에그닛 피크크롭후드집업",
               "productDesc":"#후드집업 #집업 #후드 #크롭후드 #크롭집업",
               "price":39800,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/68621/1621582933_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"1106",
               "categoryDesc":"기타",
               "productId":467,
               "productCode":68232,
               "url":"https://www.naning9.com/shop/view.php?index_no=68232",
               "productNm":"뮤베스 메쉬힙업팬티",
               "productDesc":"#힙뽕 #힙업 #힙업팬티 #보정속옷 #거들 #메쉬 #팬티 #이너웨어",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/68232/1620972054_2.jpg"
            },
            {
               "siteId":2,
               "siteNm":"naning9",
               "siteIcon":"https://cdn-naning9.bizhost.kr/img2/logo.png",
               "category":"0T",
               "categoryDesc":"ALL",
               "productId":498,
               "productCode":68385,
               "url":"https://www.naning9.com/shop/view.php?index_no=68385",
               "productNm":"론티스 데님크롭자켓",
               "productDesc":"#데님 #청자켓 #데님자켓 #크롭자켓 #크롭 #퍼프 #카라넥 #캐쥬얼 #러블리 #반팔",
               "price":0,
               "discountPrice":0,
               "productImg":"https://cdn-naning9.bizhost.kr/files/goods/68385/1619495797_2.jpg"
            }
         ]
        
        return (
         
        <template Oppostlistdata={Oppostlistdata} />
        
        )
    }
}
