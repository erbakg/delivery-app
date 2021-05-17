import icons from './icons';
import images from './images';
import {COLORS, SIZES, FONTS} from './theme';
import GOOGLE_API_KEY from './maps';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const scalePoint = window.width / 380;
export {icons, images, COLORS, SIZES, FONTS, GOOGLE_API_KEY, scalePoint};
