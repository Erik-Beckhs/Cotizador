import React, {Fragment} from 'react';

function Header(props){
    return (
        <Fragment>
             <h1>{props.cantidad}</h1>
        </Fragment>
        //jsx permite incorporar html y js
    );
}

export default Header;