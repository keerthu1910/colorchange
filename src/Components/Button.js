import React from 'react';

export const Button = () => {
    let count = 8
    let list = []
    for(let i=1;i<=Math.ceil(count/4);i++){
        list.push(<button>{i}</button>)
    }
    return(
        <div>
            <h1>hello world</h1>
            <h2>good day!</h2>
            <h3>great day</h3>
            {list}
            
        </div>
    )
}