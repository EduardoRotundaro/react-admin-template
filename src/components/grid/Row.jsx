import React from 'react';

import If from '../utilities/If';

/********** PROPS **********
vAlign -> 'start' || 'center' || 'end'                                    [Alinhar colunas na vertical]
hAlign -> 'start' || 'center' || 'end' || 'around' || 'between'           [Alinhar colunas na horizontal]
className -> String                                                       [Adiciona mais classes à div]
hide -> true || false                                                     [Adiciona mais classes à div]
***************************/

export default props => {
    function classNames(){
        let classes = 'row';
        if(props.vAlign) classes += ` align-items-${props.vAlign}`;
        if(props.hAlign) classes += ` justify-content-${props.hAlign}`;
        if(props.className) classes += ` ${props.className}`;

        return classes;
    }

    return (
        <If condition={!props.hide}>
            <div className={classNames()}>
                {props.children}
            </div>
        </If>
    );
}