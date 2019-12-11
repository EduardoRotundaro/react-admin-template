import React from 'react';

import If from '../utilities/If';

export default props => {
    let className = 'btn btn-';
    if(props.outline) className += 'outline-';
    className += (props.color || 'primary');
    if(props.sm) className += ' btn-sm';
    if(props.lg) className += ' btn-lg';
    if(props.block) className += ' btn-block';
    if(props.active) className += ' active';
    if(props.disabled) className += ' disabled';

    return(
        <If condition={!props.hide}>
            <button type="button"
                className={className+(props.className? ` ${props.className}` : '')}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </If>
    );
}