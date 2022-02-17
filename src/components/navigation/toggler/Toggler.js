import React from 'react'
import Bars from '../../icons/Bars' 
import Close from '../../icons/Close' 

import './Toggler.css'
const Toggler = ({ toggle, isOpen}) => (
   <div className="toggler" onClick={toggle}>
      { isOpen ? <Close/> : <Bars /> }
   </div>
)

export default Toggler