import React from 'react'

import './styles.scss'

const CustomButton = ({children, ...otherProps}) => (
  <button className='custom-button' type="submit" {...otherProps} >
    {children}
  </button>
)

export default CustomButton