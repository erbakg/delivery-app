import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {COLORS, icons, images, SIZES, FONTS, scalePoint} from '../../constants';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerLocationBtn}>
        <Image
          source={icons.nearby}
          style={styles.headerImg}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.headerAddressBox}>
        <View style={styles.headerAddressTxtBox}>
          <Text style={{...FONTS.h3}}>Location</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.headerShopBtn}>
        <Image
          source={icons.basket}
          style={styles.headerImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: scalePoint * 50,
    marginTop: Platform.OS === 'ios' ? 0 : scalePoint * 10,
  },
  headerLocationBtn: {
    height: scalePoint * 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerImg: {
    height: scalePoint * 30,
    width: scalePoint * 30,
  },
  headerAddressBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAddressTxtBox: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  headerShopBtn: {
    height: scalePoint * 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});
