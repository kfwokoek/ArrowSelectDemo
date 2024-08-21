import { StyleSheet, Dimensions } from 'react-native'

const { width: windowWidth } = Dimensions.get('window');


export const ViewStyles = StyleSheet.create({
    safeAreaStyle: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
    },
})