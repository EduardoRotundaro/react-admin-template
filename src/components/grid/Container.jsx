import React from 'react';

/********** PROPS **********
full -> true || false             [100% largura]
className -> String               [Adiciona mais classes à div]
***************************/

export default props => (
    <div className={`container${props.full? '-fluid':''}${props.className? ` ${props.className}`:''}`}>
        {props.children}
    </div>
);