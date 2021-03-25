import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import MenuItem from '../menu-item'
import './styles.scss'
import { selectDirectorySections } from '../../redux/directory/selectors'

// const initialSections = []

const Directory = ({ sections }) => {
  // const [sections] = useState(initialSections)
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
