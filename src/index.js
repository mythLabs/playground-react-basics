import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {},
        (err) => {}
    )
    return (
        <div>Hi</div>
    )
};


reactDOM.render(<App/>,document.querySelector('#root'));