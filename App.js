import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class ResultTable extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderStart: () => true,
      onPanResponderMove: (event, gesture) => {
        var diff = gesture.moveY - gesture.y0;
        Animated.timing(this.state.animation, {
          toValue: this.state.expanded ? height*0.1+diff: height*0.4+diff,
          duration: 100
        }).start();
      },
      onPanResponderRelease: (event, gesture) => {
        gesture.moveY < gesture.y0 + 20
          ? this.handleExpandShowModal()
          : this.state.expanded
            ? this.handleShowModal()
            : this.handleHideModal();
      }
    });

    this.state = {
      animation: new Animated.Value(height),
      showModal: false,
      expanded: false,
      panResponder
    };
  }

  handleExpandShowModal = () => {
    Animated.timing(this.state.animation, {
      toValue: height * 0.1,
      duration: 100
    }).start(() => this.setState({ showModal: true, expanded: true }));
  }

  handleShowModal = () => {
    Animated.timing(this.state.animation, {
      toValue: height * 0.4,
      duration: 100
    }).start(() => this.setState({showModal: true, expanded: false}));
  };

  handleHideModal = () => {
    Animated.timing(this.state.animation, {
      toValue: height,
      duration: 300
    }).start(() => this.setState({ showModal: false, expanded: false }));
  };

  handleScroll = (event) => {
    event.nativeEvent.contentOffset.y < 0 &&
    this.handleShowModal()
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.container}>
        <View
          style={[styles.backView, { opacity: this.state.showModal ? 0.5 : 0 }]}
        />

        <TouchableOpacity
          style={{ marginTop: 50, alignSelf: 'center' }}
          onPress={this.handleShowModal}>
          <Text>show modal</Text>
        </TouchableOpacity>

        <Animated.View
          style={[styles.modal, { top: this.state.animation }]}
          {...this.state.panResponder.panHandlers}>
          <Text style={styles.dragHandle}>====</Text>
          <ScrollView onScroll={this.handleScroll}>
            <View onStartShouldSetResponder={() => this.state.expanded}>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum1</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum2</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum3</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum4</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum5</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum6</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum7</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum8</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum9</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum0</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum1</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum2</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum3</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum4</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum5</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum6</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum7</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum8</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum9</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum0</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum1</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum2</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum3</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum4</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum5</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum6</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum7</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum8</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum9</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum0</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum1</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum2</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum3</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum4</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum5</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum6</Text>
              <Text style={{ fontSize: 40 }}>Lorem Ipsum7</Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#333'
  },
  modal: {
    position: 'absolute',
    left: 0,
    width: width,
    height: height * 0.9,
    shadowColor: 'rgba(0, 0, 0, 0.21)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'skyblue'
  },
  dragHandle: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#707070',
    height: 60
  }
});
