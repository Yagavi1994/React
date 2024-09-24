import React from 'react';

const FunctionalGreetingWithProps = (props) => {
return <h1>Hello, {props.name}{props.age}{props.greetings}</h1>;
}

export default FunctionalGreetingWithProps;