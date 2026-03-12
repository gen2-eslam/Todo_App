import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// Base width is a constant, e.g., 375 for standard iPhone
const scale = SCREEN_WIDTH / 375; 

export function responsiveFontSize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// Usage:
// <Text style={{ fontSize: responsiveFontSize(16) }}>
//   Responsive Text Example
// </Text>