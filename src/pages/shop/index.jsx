import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionsOverviewContainer from '../../components/collections-overview/container'
import { fetchCollectionsStartAsync } from '../../redux/shop/actions'
import CollectionPageContainer from '../collection/container'

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default ShopPage
