import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

function Slider() {
  const images = [
    'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg',
    'https://thumbs.dreamstime.com/b/best-house-design-images-latest-beautiful-exterior-home-pictures-new-modern-front-wall-dream-169464313.jpg',
  ];

  return (
    <View style={styles.container}>
       <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)',   width: '100%', paddingHorizontal: 16 }}>
        <Text>TEST</Text>
        <Text>TEST</Text>
        <Text>TEST</Text>
        <Text>TEST</Text>
      </View>
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: height, // Full height
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
    flex: 1,
  },
  dotStyle: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDotStyle: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default Slider;
