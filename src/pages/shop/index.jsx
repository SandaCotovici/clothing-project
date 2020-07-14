import React, { useState } from 'react'
import SHOP_DATA from './data'
import CollectionPreview from '../../components/collection-preview'

const ShopPage = () => {
// using hooks
  const [collections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default ShopPage