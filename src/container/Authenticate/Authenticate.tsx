import React, { ReactElement, useState } from 'react'

const Authenticate = (): ReactElement => {
  const [value, setValue] = useState(0)

  return (
    <div className='authenticate-modal'>
      {value}
    </div>
  )
}

export default Authenticate
