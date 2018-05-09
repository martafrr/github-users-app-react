import React from 'react';

const User = (props) => (
    <div className="userInfo">
        {props.username && <p>{props.username}</p>}
        {props.id && <p>Id: {props.id}</p>}
        {props.location && <p>Location: {props.location}</p>}
        {props.public_repos && <p>Public repos: {props.public_repos}</p>}
        {props.url && <a href={props.url} target="_blank" >
          <img src={props.avatar_url} alt={`${props.username}`} />
        </a>}
    </div>
);

export default User;
