import { TouchableOpacity, Image } from "react-native"
import Icons from '../../constants/Icons'


const LeftArrowButton = ({ numItems, state, setState, width, height }) => {
    
    const handlePress = () => {
        if (state > 0) {
            setState(prev => prev - 1)
        }
        else {
            setState(numItems - 1)
        }
        console.log(state)
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={Icons.left_arrow} style={{ resizeMode:"cover", width: width, height: height }}/>
        </TouchableOpacity>
    )
}

export default LeftArrowButton