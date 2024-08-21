import {View, Text, SafeAreaView} from 'react-native'
import { useState } from 'react'
import { ViewStyles } from '../styles/ViewStyles'
import { TextStyles } from '../styles/TextStyles'
import RightArrowButton from '../components/buttons/RightArrowButton'

const index = () => {

    const [item, setItem] = useState(0)
    
    return (
        <SafeAreaView style={ViewStyles.safeAreaStyle}>
            <Text style={TextStyles.primaryText}>App</Text>
            <RightArrowButton numItems={4} state={item} setState={setItem} width={50} height={50}/>
        </SafeAreaView>
    )
}

export default index