import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/selectors'
import CollectionItem from '../../components/collection-item'

import {
  CollectionPageContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId))

  const { title, items } = collection

  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage
