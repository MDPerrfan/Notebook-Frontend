import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-info" role="alert" /* style={{"width":"600px","justifyContent":"center"}} */>
                {props.message}
            </div>
        </div>
    )
}
