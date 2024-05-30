import React from 'react';

const Alert = ({ alert }) => {
    return (
        alert && (
            <div className="alert-container">
                <div className={`alert alert-${alert.type} alert-content`} role="alert">
                    {alert.msg}
                </div>
            </div>
        )
    );
}

export default Alert;
