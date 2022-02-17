import React from 'react'

import './FormControl.css'

const FormControl = ({value, children, input}) => (
    <div className="form-control">
        <label>{children}</label>   
        <input value={value} onInput={() => input(event.target.value)}/>   
    </div>
) 

export default FormControl