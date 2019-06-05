import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    
    return (
    <div className = "headerRow">
        <h1>Lambda School</h1>
        <h2>@LambdaSchool</h2>
        {new Date().toString()}
       
    </div>
    )
}

export default HeaderTitle;