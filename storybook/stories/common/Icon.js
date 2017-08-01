import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from './CenterView'

import Icon from '../../../src/components/common/Icon'

storiesOf('Icon', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('burger', () =>
    <Icon image={require('../../../src/assets/burger.png')} />
  )
  .add('chevron-left', () =>
    <Icon image={require('../../../src/assets/chevron-left.png')} />
  )
