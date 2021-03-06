//importing react and react-native Library files
import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,Image,ScrollView,Modal,TextInput} from 'react-native';

//importing graph framework
import { Bar } from 'react-native-pathjs-charts'

//importing external framework for drowpdown modal
import ModalSelector from "react-native-modal-selector";

export default class IncomeStatement extends React.Component
{

  constructor()
  {
    super();
    this.state={
      region:'All',
      segment:'All',
      products:'All',
      modalVisible:false,
      country:'select a location',
      product:'select a product',
      category:'select a category',
      data:[
        [{
          "v": 49,
          "name": "2016 NP"
        }, {
          "v": 42,
          "name": "2017 NP"
        },{
          "v": 79,
          "name": "2018 NP"
        }],
        [{
          "v": 69,
          "name": "2016 NI"
        }, {
          "v": 62,
          "name": "2017 NI"
        },{
          "v": 59,
          "name": "2018 NI"
        }],
        [{
          "v": 45,
          "name": "2016 M"
        }, {
          "v": 55,
          "name": "2017 M"
        },{
          "v": 43,
          "name": "2018 M"
        }]
      ]
    }
  }

  handleFilter(){
    if(this.state.product == 'Apple')
    {
      var data = [
        [{
          "v": 55,
          "name": "2016 NP"
        }, {
          "v": 48,
          "name": "2017 NP"
        },{
          "v": 60,
          "name": "2018 NP"
        }],
        [{
          "v": 70,
          "name": "2016 NI"
        }, {
          "v": 88,
          "name": "2017 NI"
        },{
          "v": 61,
          "name": "2018 NI"
        }],
        [{
          "v": 30,
          "name": "2016 M"
        }, {
          "v": 40,
          "name": "2017 M"
        },{
          "v": 50,
          "name": "2018 M"
        }]
      ]
      this.setState({data:data,modalVisible:!this.state.modalVisible,products:'Apple'});
    }
    else if (this.state.product == 'Banana') {

      var data = [
        [{
          "v": 20,
          "name": "2016 NP"
        }, {
          "v": 30,
          "name": "2017 NP"
        },{
          "v": 40,
          "name": "2018 NP"
        }],
        [{
          "v": 40,
          "name": "2016 NI"
        }, {
          "v": 50,
          "name": "2017 NI"
        },{
          "v": 60,
          "name": "2018 NI"
        }],
        [{
          "v": 15,
          "name": "2016 M"
        }, {
          "v": 25,
          "name": "2017 M"
        },{
          "v": 35,
          "name": "2018 M"
        }]
      ]
      this.setState({data:data,modalVisible:!this.state.modalVisible,products:'Banana'});

    }


  }

  render()
  {
    let index = 0;
      const locationData = [
        { key: index++, label: "Sollentuna" },
        { key: index++, label: "Hägersten" },
        { key: index++, label: "Skärholmen" }
      ];

      let index2 = 0;
      const categoryData = [
        { key: index2++, label: "Vegetables" },
        { key: index2++, label: "Fruits" },
        { key: index2++, label: "Oil" },
        { key: index2++, label: "Packaged Items" }
      ];

      let index1 = 0;
      const productsData = [
        { key: index1++, label: "Apple" },
        { key: index1++, label: "Banana" },
        { key: index1++, label: "Orange" },
        { key: index1++, label: "grapes" }
      ];

    let data = [
      [{
        "v": 49,
        "name": "2016 NP"
      }, {
        "v": 42,
        "name": "2017 NP"
      },{
        "v": 79,
        "name": "2018 NP"
      }],
      [{
        "v": 69,
        "name": "2016 NI"
      }, {
        "v": 62,
        "name": "2017 NI"
      },{
        "v": 59,
        "name": "2018 NI"
      }],
    ]

    let data1 = [
      [{
        "v": 49,
        "name": "Paid"
      }, {
        "v": 42,
        "name": "Paid"
      },{
        "v": 79,
        "name": "Paid"
      }],
      [{
        "v": 69,
        "name": "Yet to"
      }, {
        "v": 62,
        "name": "Yet to"
      },{
        "v": 89,
        "name": "Yet to"
      }],
    ]

    let data2 = [
      [{
        "v": 19,
        "name": "Received"
      }, {
        "v": 90,
        "name": "Received"
      },{
        "v": 40,
        "name": "Received"
      }],
      [{
        "v": 99,
        "name": "Yet to"
      }, {
        "v": 110,
        "name": "Yet to"
      },{
        "v": 88,
        "name": "Yet to"
      }],
    ]

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let options1 = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#d1c51d',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let options2 = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#1f9132',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    const { params } = this.props.navigation.state;
    const graph = params ? params.graph : null;

    if(graph == 'profit')
    {
      return(
          <ImageBackground source={require('./../../images/d1.jpeg')} style={{flex:1}}>
          <ScrollView>
          <View style={{flexDirection:'row',backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:15}}>
            <View style={{flex:3}}>
              <Text style={{fontSize:20,paddingTop:15,paddingLeft:25,paddingBottom:15,fontWeight:'bold'}}>Region {this.state.region}</Text>
              <Text style={{fontSize:20,paddingTop:15,paddingLeft:25,paddingBottom:15,fontWeight:'bold'}}>Segment {this.state.segment}</Text>
              <Text style={{fontSize:20,paddingTop:15,paddingLeft:25,paddingBottom:15,fontWeight:'bold'}}>Product {this.state.products}</Text>
            </View>
            <View style={{justifyContent:'center',flex:1}}>
              <TouchableOpacity onPress={()=>{this.setState({modalVisible:!this.state.modalVisible})}}><Image style={{justifyContent:'flex-end'}} source={require('./../../images/settings.png')} /></TouchableOpacity>
            </View>
          </View>

          <View style={{backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20,alignItems:'center',padding:20}}>
            <Bar data={this.state.data} options={options} accessorKey='v'/>
          </View>

          <View style={{backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20,marginBottom:20,padding:20,flexDirection:'row',justifyContent:'space-between'}}>

            <View>
              <View style={{height:15,width:15,backgroundColor:'#44a9ce'}}>
              </View>
              <Text style={{color:'black',fontSize:15}}>NP - Net Profit</Text>
            </View>

            <View>
              <View style={{height:15,width:15,backgroundColor:'#1b86ad'}}>
              </View>
              <Text style={{color:'black',fontSize:15}}>NI - Net Income</Text>
            </View>

            <View>
              <View style={{height:15,width:15,backgroundColor:'#0d6687'}}>
              </View>
              <Text style={{color:'black',fontSize:15}}>M - Margin</Text>
              </View>
            </View>

          </ScrollView>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible:!this.state.modalVisible});
            }}>
            <ScrollView>
            <View style={{alignItems:'center'}}>
              <Text style={{color:'#4286f4',fontSize:30,marginTop:10,fontWeight:'bold',marginBottom:60}}>Filter</Text>
              <Image source={require('./../../images/map.png')} style={{alignItems:'center'}}/>
              <ModalSelector
                style={{ backgroundColor: "rgba(17, 216, 213,1)" ,marginTop:10}}
                data={locationData}
                initValue={this.state.country}
                supportedOrientations={["landscape"]}
                accessible={true}
                scrollViewAccessibilityLabel={"Scrollable options"}
                cancelButtonAccessibilityLabel={"Cancel Button"}
                onChange={option => {
                  this.setState({ country: option.label });
                }}>
                <TextInput
                  style={{
                    borderColor: "#ccc",
                    color: "white",
                    fontSize: 20,
                    padding: 10
                  }}
                  editable={false}
                  placeholder="Select something yummy!"
                  value={this.state.country}
                />
              </ModalSelector>
            </View>

            <View style={{alignItems:'center',marginTop:60}}>
              <Image source={require('./../../images/cat.png')} style={{alignItems:'center'}}/>
              <ModalSelector
                style={{ backgroundColor: "rgba(17, 216, 213,1)" ,marginTop:10}}
                data={categoryData}
                initValue={this.state.category}
                supportedOrientations={["landscape"]}
                accessible={true}
                scrollViewAccessibilityLabel={"Scrollable options"}
                cancelButtonAccessibilityLabel={"Cancel Button"}
                onChange={option => {
                  this.setState({ category: option.label });
                }}>
                <TextInput
                  style={{
                    borderColor: "#ccc",
                    color: "white",
                    fontSize: 20,
                    padding: 10
                  }}
                  editable={false}
                  placeholder="Select something yummy!"
                  value={this.state.category}
                />
              </ModalSelector>
            </View>

            <View style={{alignItems:'center',marginTop:60}}>
              <Image source={require('./../../images/shop.png')} style={{alignItems:'center'}}/>
              <ModalSelector
                style={{ backgroundColor: "rgba(17, 216, 213,1)" ,marginTop:10}}
                data={productsData}
                initValue={this.state.product}
                supportedOrientations={["landscape"]}
                accessible={true}
                scrollViewAccessibilityLabel={"Scrollable options"}
                cancelButtonAccessibilityLabel={"Cancel Button"}
                onChange={option => {
                  this.setState({ product: option.label });
                }}>
                <TextInput
                  style={{
                    borderColor: "#ccc",
                    color: "white",
                    fontSize: 20,
                    padding: 10
                  }}
                  editable={false}
                  placeholder="Select something yummy!"
                  value={this.state.product}
                />
              </ModalSelector>
            </View>

            </ScrollView>

            <View style={{width:'100%',flexDirection:'row',position:'absolute',bottom:0,justifyContent:'space-evenly'}}>
              <TouchableOpacity style={{flex:1}} onPress={()=>{this.setState({modalVisible:!this.state.modalVisible})}}>
                <Text style={{backgroundColor:'#2567d1',borderWidth:1,color:'white',padding:15,fontSize:18,textAlign:'center'}}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1}} onPress={this.handleFilter.bind(this)}>
                <Text style={{backgroundColor:'white',borderWidth:1,padding:15,fontSize:18,textAlign:'center',color:'#2567d1'}}>Apply</Text>
              </TouchableOpacity>
            </View>

          </Modal>

          </ImageBackground>
      );
    }
    else if (graph == 'payable' || graph == 'receivable') {
      return(
        <ImageBackground source={require('./../../images/d1.jpeg')} style={{flex:1}}>
        <ScrollView>
          <View style={{backgroundColor:'rgba(163, 16, 77,0.5)',flexDirection:'row',justifyContent:'space-around',paddingBottom:15}}>
            <View style={{flex:3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:27,padding:15,color:'white'}}>Working Capital</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20}}>
            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontSize:20,color:'#a3104d',padding:10,textAlign:'center',fontWeight:'bold'}}>Account payable</Text>
            </View>
          </View>

          <View style={{backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20,alignItems:'center',padding:20}}>
            <Bar data={data1} options={options1} accessorKey='v'/>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20}}>
            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontSize:20,color:'#a3104d',padding:10,textAlign:'center',fontWeight:'bold'}}>Account Receivable</Text>
            </View>
          </View>

          <View style={{backgroundColor:'rgba(255, 255, 255,0.4)',marginTop:20,alignItems:'center',padding:20}}>
            <Bar data={data2} options={options2} accessorKey='v'/>
          </View>

        </ScrollView>
        </ImageBackground>
      )
    }
    else{
      return(
        <ImageBackground source={require('./../../images/d1.jpeg')} style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.5)',justifyContent:'center',alignItems:'center',margin:20}}>
              <Text style={{textAlign:'center',fontSize:30,color:'black'}}>No Data Found!!!</Text>
            </View>
        </ImageBackground>
      )
    }


  }
}
