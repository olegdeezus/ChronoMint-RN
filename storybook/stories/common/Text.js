import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from './CenterView'

import Text from '../../../src/components/common/Text'

storiesOf('Text', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('with simple text', () =>
    <Text>
      Hello Text
    </Text>
  )
  .add('with some emoji', () =>
    <Text>😀 😎 👍 💯</Text>
  )
