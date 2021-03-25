import React from 'react'

import CollectionItem from '../collection-item'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './styles'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

export default CollectionPreview
