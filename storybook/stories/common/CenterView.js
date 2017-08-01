import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const CenterView = ({ children, style }) => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...style
  }}>
    {children}
  </View>
)

CenterView.defaultProps = {
  children: null,
}

CenterView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default CenterView
