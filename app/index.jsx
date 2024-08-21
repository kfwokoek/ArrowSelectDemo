import {View, Text, SafeAreaView} from 'react-native'
import { useState } from 'react'
import Icons from '../constants/Icons'
import { ViewStyles } from '../styles/ViewStyles'
import { TextStyles } from '../styles/TextStyles'

const index = () => {
    
    return (
        <SafeAreaView style={ViewStyles.safeAreaStyle}>
            <Text style={TextStyles.primaryText}>App</Text>
        </SafeAreaView>
    )
}

export default index