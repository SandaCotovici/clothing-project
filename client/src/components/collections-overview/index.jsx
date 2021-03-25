import React from 'react'
import './styles.scss'
import CollectionPreview from '../collection-preview'
import { selectCollectionsForPreview } from '../../redux/shop/selectors'
import { useSelector } from 'react-redux'

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default CollectionOverview
