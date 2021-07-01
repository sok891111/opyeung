import React, { Component } from "react";
import Oppost from '../atoms/Oppost'
import Slider from "react-slick";
import '../molecules/Oppost.css';
const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
};

const OppostlistData =[
    {
        Postusername : 'John D. Veloper',
        Postusernickname : 'John Doe',
        Postcaption : '어드빈 나염반팔티',
        Postuserface : 'https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg',
        Postimgsrc : 'data:image/jpeg;base64,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'
    
    },
    
{
        Postusername : 'Kim Jaehwan',
        Postusernickname : 'Jaehwan',
        Postcaption : '제홀스 프릴로브',
        Postuserface : 'https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg',
        Postimgsrc : 'http://gdimg.gmarket.co.kr/1668476694/still/600?ver=1567617447',
    
    },
    
    {
        Postusername : 'Peter Parker',
        Postusernickname : 'Peter',
        Postcaption : '켄모시 데님멜빵원피스',
        Postuserface : 'http://dantee99.hgodo.com/bord/data/goods/19/11/20/15330/15330_detail_049.jpg',
        Postimgsrc : 'https://static.coupangcdn.com/image/vendor_inventory/dc3f/7c654a170de38f6ce75e4085fdc3800e00b1b29e0e333ffd4440886d2ee9.jpg',
    },
]
class Oppostlist extends Component {
    constructor(props) {

        super(props);

    }


    render() { 
    
        return (
            <Slider {...settings}>
                {OppostlistData.map(item => {
                    return (
                        <Oppost post={item} />
                    )
                  }
                 )
                }
            </Slider>
        )

    }

}

export default Oppostlist;
