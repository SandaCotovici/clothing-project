import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from "../../redux/shop/selectors";
import WithSpinner from "../with-spinner"
import CollectionsOverview from './index'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer