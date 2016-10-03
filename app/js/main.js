/*
let a='hello <input type="text" value=""/>';
export {a};*/

import React from 'react';

class Name extends React.Component {
    render (){
        return (
            <div>
                hello,React!!
                <input type="text" />
            </div>
        )
    }
}

export { Name }