import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import t from '@/utils/i18n'
import './index.css'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text>{t()}</Text>
      </View>
    )
  }
}
