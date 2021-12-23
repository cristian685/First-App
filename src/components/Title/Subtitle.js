import React from 'react';
export default function Subtitle(props) {
    const { subtitle = '' } = props;
    return <div style={{height: 30}}>{subtitle}</div>
}

