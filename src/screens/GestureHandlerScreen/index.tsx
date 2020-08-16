import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  StatusBar,
  Dimensions,
  FlatList,
  View,
  Image,
  Animated
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State
} from 'react-native-gesture-handler';

import { Container, PosterImage, PosterWrapper } from './styles';

const { width } = Dimensions.get('screen');

import listData from './data';
import data from './data';

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const GestureHandlerScreen: FC = () => {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const setActiveIndex = useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  }, []);

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true
    }).start();

    // setInterval(() => {
    //   scrollXIndex.setValue(Math.floor(Math.random() * listData.length));
    // }, 1000);
  }, []);

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev): void => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev): void => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <Container>
          <StatusBar hidden />
          <FlatList
            data={listData}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              index,
              children,
              style,
              ...props
            }): JSX.Element => {
              const newStyle = [style, { zIndex: listData.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100]
              });

              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3]
              });

              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]
              });

              return (
                <PosterWrapper
                  style={{
                    transform: [{ translateX }, { scale }],
                    opacity
                  }}>
                  <PosterImage
                    source={{ uri: item.poster }}
                    width={ITEM_WIDTH}
                    height={ITEM_HEIGHT}
                  />
                </PosterWrapper>
              );
            }}
          />
        </Container>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default GestureHandlerScreen;
