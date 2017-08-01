import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from './CenterView'

import Avatar from '../../../src/components/common/Avatar'

storiesOf('Avatar', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('photo 1', () =>
    <Avatar image={require('../../assets/avatar.png')} />
  )
