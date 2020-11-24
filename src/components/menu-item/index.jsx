import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  BackgroundImage,
  MenuItemContainer,
  MenuItemContent,
  SubTitleContainer,
  TitleContainer,
} from './styled'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage className="background-image" imageUrl={imageUrl} />
    <MenuItemContent className='content'>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubTitleContainer>SHOP NOW</SubTitleContainer>
    </MenuItemContent>
  </MenuItemContainer>
)

export default withRouter(MenuItem)
