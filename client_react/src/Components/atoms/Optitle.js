import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;
export default function Optitle (props) {
    return (
            <h2 level={5} style={{ fontSize: 20, color: props.titleColor, fontFamily: 'Hiruko Pro', fontWeight: 'bold'}}>{props.titleName}</h2>
    )
}
