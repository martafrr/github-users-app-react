import React from 'react';

const Form = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" name="userName" placeholder="User name" className="userInput" />
        <button className="btn">Search!</button>
    </form>
);

export default Form;
