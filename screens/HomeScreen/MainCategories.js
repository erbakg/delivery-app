import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, scalePoint, SIZES} from '../../constants';

export default function MainCategories({
  data,
  onSelectCategory,
  selectedCategory,
}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectCategory(item)}
        style={
          selectedCategory?.id == item.id
            ? styles.selectedRenderItem
            : styles.simpleRenderItem
        }>
        <View
          style={
            selectedCategory?.id == item.id
              ? styles.selectedRenderItemBox
              : styles.simpleRenderItemBox
          }>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={styles.renderItemImg}
          />
        </View>
        <Text
          style={
            selectedCategory?.id == item.id
              ? styles.selectedRenderItemTxt
              : styles.simpleRenderItemTxt
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainCategoriesBox}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.mainCategoriesFlatlist}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainCategoriesBox: {
    padding: SIZES.padding * 2,
  },
  mainCategoriesFlatlist: {
    paddingVertical: SIZES.padding * 2,
  },
  selectedRenderItem: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
  },
  simpleRenderItem: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
  },
  selectedRenderItemBox: {
    width: scalePoint * 50,
    height: scalePoint * 50,
    borderRadius: scalePoint * 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  simpleRenderItemBox: {
    width: scalePoint * 50,
    height: scalePoint * 50,
    borderRadius: scalePoint * 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
  },
  renderItemImg: {
    width: scalePoint * 30,
    height: scalePoint * 30,
  },
  selectedRenderItemTxt: {
    marginTop: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body5,
  },
  simpleRenderItemTxt: {
    marginTop: SIZES.padding,
    color: COLORS.black,
    ...FONTS.body5,
  },
});
