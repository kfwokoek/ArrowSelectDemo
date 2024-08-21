import { TouchableOpacity, Image } from "react-native"

const RightArrowButton = ({ numItems, state, setState }) => {
    
    const handlePress = () => {
        if (state < numItems - 1) {
            setState((state + 1) % numItems)
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={Icons.rightArrow} style={IconStyles.iconStyle} />
        </TouchableOpacity>
    )
}

export default RightArrowButton