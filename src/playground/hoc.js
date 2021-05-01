//Higher order component (HOC)
//Reuse code
//render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>the info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info. </p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Auth</p>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>please log in</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="detail" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="detaasdil" />,document.getElementById('app'));
