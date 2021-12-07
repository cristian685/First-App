import React from 'react';
import Subtitle from './Subtitle';

function Title(props){
    const { title, subtitle } = props;
    return <div>
        {title}

        {subtitle && <Subtitle subtitle={subtitle} />}
    </div>
}

export default Title;
