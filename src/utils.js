export const addClass = ( elm, className ) => {
  if( typeof className === 'string' && className != "" ){
    const regex = new RegExp( className, "g")
    if( !regex.test( elm.className ) ){
      elm.className += ` ${className}`
    }
  }
}

export const removeClass = ( elm, className ) => {
  const regex = new RegExp( className, "g")
  elm.className = elm.className.replace( regex, '' )
}


