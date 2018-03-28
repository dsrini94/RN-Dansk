import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  YellowBox
} from 'react-native';


export default class Dashboard extends Component<Props> {

  constructor()
  {
    super();
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  render() {
    return (
        <ImageBackground source={require('./../../images/d1.jpeg')} style={{flex:1}}>
        <ScrollView>

            <View style={{alignItems:'center',marginTop:'10%',backgroundColor:'rgba(255,255,255,0.2)',paddingTop:15,paddingBottom:15}}>
              <Image source={require('./../../images/logo.png')}/>
            </View>

            <View style={{marginTop:'25%',flexDirection:'row',justifyContent:'space-between',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:5}}>
              <TouchableWithoutFeedback style={{height:130}} onPress={()=>this.props.navigation.navigate('locationSelector')}><Image source={require('./../../images/d.png')} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={{height:130}} onPress={()=>this.props.navigation.navigate('CFODashboard')}><Image source={require('./../../images/clip.png')}/></TouchableWithoutFeedback>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
              <Text style={{color:'#ffffff',fontSize:20}}>Dynamic Pricing</Text>
              <Text style={{color:'#ffffff',fontSize:20}}>CFO Report</Text>
            </View>
        </ScrollView>
        </ImageBackground>
    );
  }
}
