import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from './CenterView'

import Logo from '../../../src/components/common/Logo'

storiesOf('Logo', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('beta 0.1', () =>
    <Logo betaVersion="0.1" />
  )
