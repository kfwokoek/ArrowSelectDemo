import {View, Text, SafeAreaView} from 'react-native'
import { useState } from 'react'
import { ViewStyles } from '../styles/ViewStyles'
import { TextStyles } from '../styles/TextStyles'
import RightArrowButton from '../components/buttons/RightArrowButton'
import LeftArrowButton from '../components/buttons/LeftArrowButton'

const index = () => {

    const [item, setItem] = useState(0)
    const width = 75
    const height = 75
    const numItems = 4
    
    return (
        <SafeAreaView style={ViewStyles.safeAreaStyle}>
            <View style={ViewStyles.rowStyle}>
                <LeftArrowButton numItems={numItems} state={item} setState={setItem} width={width} height={height}/>
                <Text style={TextStyles.primaryText}>{item}</Text>
                <RightArrowButton numItems={numItems} state={item} setState={setItem} width={width} height={height}/>
            </View>
        </SafeAreaView>
    )
}

export default index