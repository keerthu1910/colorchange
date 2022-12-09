import React from 'react';

export const Button = () => {
    let count = 8
    let list = []
    for(let i=1;i<=Math.ceil(count/4);i++){
        list.push(<button>{i}</button>)
    }
    return(
        <div>
            
            {list}
            
        </div>
    )
}