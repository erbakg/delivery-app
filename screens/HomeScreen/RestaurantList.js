import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, scalePoint, SIZES} from '../../constants';

export default function RestaurantList({data, categories}) {
  const getCategoryNameById = id => {
    let category = categories.filter(a => a.id == id);
    if (category.length > 0) {
      return category[0].name;
    } else {
      return '';
    }
  };
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.renderItemBox}>
      <View style={styles.renderItemImgBox}>
        <Image
          source={item.photo}
          resizeMode="cover"
          style={styles.renderItemImg}
        />
        <View style={styles.durationBox}>
          <Text style={{...FONTS.h4}}>{item.duration}</Text>
        </View>
      </View>

      {/* RestaurantInfo section */}

      <Text style={{...FONTS.body2}}>{item.name}</Text>
      <View style={styles.ratingBox}>
        <Image source={icons.star} style={styles.ratingStarImg} />
        <Text style={{...FONTS.body3}}>{item.rating}</Text>
        {/* categories */}
        <View style={styles.categoriesBox}>
          {item.categories.map(categoryId => {
            return (
              <View style={styles.categoryBox} key={categoryId}>
                <Text style={{...FONTS.body3}}>
                  {getCategoryNameById(categoryId)}
                </Text>
                <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
              </View>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.flatList}
    />
  );
}
const styles = StyleSheet.create({
  flatList: {
    padding: SIZES.padding * 2,
    paddingBottom: scalePoint * 30,
  },
  renderItemBox: {
    marginBottom: SIZES.padding * 2,
  },
  renderItemImgBox: {
    marginBottom: SIZES.padding,
  },
  renderItemImg: {
    width: '100%',
    height: scalePoint * 200,
    borderRadius: SIZES.radius,
  },
  durationBox: {
    position: 'absolute',
    bottom: -1,
    height: scalePoint * 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingBox: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
  },
  ratingStarImg: {
    height: scalePoint * 20,
    width: scalePoint * 20,
    tintColor: COLORS.primary,
    marginRight: scalePoint * 10,
  },
  categoriesBox: {
    flexDirection: 'row',
    marginLeft: scalePoint * 10,
  },
  categoryBox: {
    flexDirection: 'row',
  },
});
