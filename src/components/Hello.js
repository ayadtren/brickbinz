import React from 'react'

const hello = props => {
    return <h1>hello {props.name} {props.something}</h1>
} 

const sample = () => {
    React.createElement('h3', null, 'hello justin, keep up the good work!');
}

export default hello
