import { TouchableOpacity, Image } from "react-native"
import Icons from '../../constants/Icons'


const RightArrowButton = ({ numItems, state, setState, width, height }) => {
    
    const handlePress = () => {
        if (state < numItems - 1) {
            setState(prev => prev + 1)
        }
        else {
            setState(0)
        }
        console.log(state)
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={Icons.right_arrow} style={{ resizeMode:"cover", width: width, height: height }}/>
        </TouchableOpacity>
    )
}

export default RightArrowButton