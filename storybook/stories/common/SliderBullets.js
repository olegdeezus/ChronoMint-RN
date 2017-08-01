import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from './CenterView'

import SliderBullets from '../../../src/components/common/SliderBullets'

storiesOf('SliderBullets', module)
  .addDecorator(getStory =>
    <CenterView style={{backgroundColor: 'black'}}>
      {getStory()}
    </CenterView>
  )
  .add('four total, first active', () =>
    <SliderBullets count={4} active={0} />
  )
  .add('four total, third active', () =>
    <SliderBullets count={4} active={2} />
  )
