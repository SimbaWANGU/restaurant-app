import React, { ReactElement, useState } from 'react'

const Authenticate = (): ReactElement => {
  const [value, setValue] = useState(0)

  setValue(24)

  return (
    <div className='authenticate-modal'>
      {value}
    </div>
  )
}

export default Authenticate
