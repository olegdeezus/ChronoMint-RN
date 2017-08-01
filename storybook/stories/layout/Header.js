import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Header from '../../../src/components/layout/Header'

storiesOf('Header', module)
  .add('empty', () =>
    <Header />
  )
