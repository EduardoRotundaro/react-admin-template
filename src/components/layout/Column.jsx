import React from 'react';

import If from '../utilities/If';

/********** PROPS **********
vAlign -> 'start' || 'center' || 'end'       [Alinhar na vertical]
equal -> true || false                       [Larguras iguais]
auto -> true || false                        [Largura automatica]
sizes -> '12-10-8-6-4'                       [Cols p/ dispositivos - Extra Small, Small, Medium, Large and Extra Large]
className -> String                          [Adiciona mais classes à div]
hide -> true || false                        [Exibe ou não o elemento]
***************************/

export default props => {
    function classNames (){
        let algn = `${props.vAlign? `align-self-${props.vAlign} `:''}`;
        
        if(props.className) algn += `${props.className} `;
        if(props.equal) return `${algn}col`;
        if(props.auto) return `${algn}col-auto`;

        let cols = (props.sizes || '12-12-12-12-12').split('-');
        return `${algn}col-${cols[0]} col-sm-${cols[1]} col-md-${cols[2]} col-lg-${cols[3]} col-xl-${cols[4]}`;
    }

    return (
        <If condition={!props.hide}>
            <div className={classNames()} onClick={props.onclick}>
                {props.children}
            </div>
        </If>
    );
}