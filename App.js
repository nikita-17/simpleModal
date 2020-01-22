import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, PanResponder, Animated, Dimensions, TouchableOpacity, Text, ScrollView} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class ResultTable extends Component {

  constructor(props) {
    super(props);
    
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderStart: (event, gesture) => {
        this.setState({getPos: gesture.y0})
      },
      onPanResponderRelease: (event, gesture) => {
        console.log(gesture.moveY, height*0.4, this.state.animation._value)
        gesture.moveY < this.state.getPos + 20
        ?
        Animated.timing(this.state.animation, {
          toValue: 100,
          duration: 100,
        }).start(() => {})
        :
        Animated.timing(this.state.animation, {
          toValue: height * 0.4,
          duration: 100,
        }).start(() => {})
      }
    });

    this.state = {
      animation: new Animated.Value(height),
      showModal: false,
      getPos: 0,
      panResponder
    }
    
  }

  handleShowModal = () => {
    this.setState(
      {showModal: true},
      () => {
        Animated.timing(this.state.animation, {
          toValue: height * 0.4,
          duration: 500
        }).start();
      }  
    );
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.container}>
        <View style={[styles.backView, {opacity: this.state.showModal ? 0.5 : 0}]}/>

        <TouchableOpacity style={{marginTop: 50, alignSelf: 'center'}} onPress={this.handleShowModal}>
          <Text>show modal</Text>
        </TouchableOpacity>

        <Animated.View style={[styles.modal, {top: this.state.animation}]}>
        <Text style={styles.dragHandle} {...this.state.panResponder.panHandlers}>====</Text>
          <ScrollView>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
            <Text style={{fontSize:40}}>Lorem Ipsum</Text>
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
    height: height - 100,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.21)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'skyblue'
  },
  dragHandle: {
    fontSize: 22,
    color: '#707070',
    height: 60
  },
});
