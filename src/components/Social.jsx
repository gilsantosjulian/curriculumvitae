import React from 'react';

const Social = (props) => {

    return (
        <div>
            {props.social && props.social.map((item) => <div key={item.name}>{item.name}</div>)}
        </div>
    );
}

export default Social;