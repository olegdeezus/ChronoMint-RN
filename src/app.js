import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import Header from './components/layout/Header'

export default class ChronoMintApp extends Component {
  render () {
    return (
      <View>
        <Header />
      </View>
    )
  }
}

AppRegistry.registerComponent('ChronoMintApp', () => ChronoMintApp)
