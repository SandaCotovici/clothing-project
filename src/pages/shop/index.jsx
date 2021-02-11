import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CollectionOverview from '../../components/collections-overview'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/utils'
import { updateCollections } from '../../redux/shop/actions'
import WithSpinner from '../../components/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')

    // solution to fetch data from firebase db:
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/clooothing-shop515/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections))

    const getCollectionsMap = (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))
      setIsLoading(false)
    }

    const unsubscribeFromSnapshot = collectionRef.get().then(getCollectionsMap)
    return () => unsubscribeFromSnapshot
  }, [])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  )
}

export default ShopPage
