import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionOverview from '../../components/collections-overview'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection'

import { fetchCollectionsStart } from '../../redux/shop/actions'
import WithSpinner from '../../components/with-spinner'
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()
  const isCollectionFetching = useSelector(selectIsCollectionFetching)
  const isCollectionLoaded = useSelector(selectIsCollectionsLoaded)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
    </div>
  )
}

export default ShopPage
