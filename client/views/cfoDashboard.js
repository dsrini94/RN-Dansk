import React from 'react';

import {View,Text,ImageBackground,TouchableOpacity,Image,ScrollView} from 'react-native';

import { Pie } from 'react-native-pathjs-charts'

export default class CFODashboard extends React.Component
{
  constructor()
  {
    super();
    this.state={
      data:[{
        kpi:'Net profit Margin',
        value:3,
        margin:'3%',
        arrow:true,
        name:'profit'
      },
      {
        kpi:'Accounts payable turnover',
        value:1,
        margin:'4%',
        arrow:false,
        name:'payable'
      },
      {
        kpi:'Accounts receivable turnover',
        value:5,
        margin:'1%',
        arrow:true,
        name:'receivable'
      },
      {
        kpi:'Current Ratio',
        value:4,
        margin:'2%',
        arrow:false,
        name:'Ratio'
      },
      {
        kpi:'Working Captial',
        value:3.5,
        margin:'5%',
        arrow:true,
        name:'Captial'
      },
      {
        kpi:'Budget Variance',
        value:2.3,
        margin:'3%',
        arrow:false,
        name:'Variance'
      },
      {
        kpi:'Net Promoter Score',
        value:3,
        margin:'1%',
        arrow:true,
        name:'Score'
      }]
    }
  }

  render()
  {

    let data = [{
      "name": "750K",
      "population": 750000
    },
     {
      "name": "250K",
      "population": 250000
    }
  ]

    let options = {
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      width: 150,
      height: 150,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        enabled: true,
        type: 'oneByOne',
        duration: 100,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }


    return(
        <ImageBackground source={require('./../../images/d1.jpeg')} style={{flex:1}}>
          <View style={{backgroundColor:'rgba(163, 16, 77,0.5)',flexDirection:'row',justifyContent:'space-around',paddingBottom:15}}>
            <View style={{flex:3,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:27,padding:20,color:'white'}}>Annual Revenue</Text>
            </View>
            <View style={{flex:2,justifyContent:'flex-end'}}>
                <Pie data={data}
                  options={options}
                  accessorKey="population"
                  margin={{ top: -10, left: -20, right: 50, bottom: 0 }}
                  color="#2980B9"
                  pallete={
                    [
                      { 'r': 24, 'g': 175, 'b': 35 },
                      { 'r': 229, 'g': 61, 'b': 61 },

                    ]
                  }
                  r={20}
                  R={55}
                  legendPosition="topLeft"
                  label={{
                    fontFamily: 'Arial',
                    fontSize: 15,
                    fontWeight: true,
                    color: '#ECF0F1'
                  }}
                  />
              </View>
          </View>


          <View style={{flexDirection:'row',backgroundColor:'rgba(255, 255, 255,0.4)'}}>
            <View style={{flex:3}}>
              <Text style={{fontSize:20,color:'#a3104d',padding:10,textAlign:'center',fontWeight:'bold'}}>KPI</Text>
            </View>
            <View style={{flex:2}}>
              <Text style={{fontSize:20,color:'#a3104d',padding:10,textAlign:'center',fontWeight:'bold'}}>Value</Text>
            </View>
            <View style={{flex:2}}>
              <Text style={{fontSize:20,color:'#a3104d',padding:10,textAlign:'center',fontWeight:'bold'}}>% Change</Text>
            </View>
          </View>

          <ScrollView style={{flex:1}}>
          <View style={{flex:1,flexDirection:'column',backgroundColor:'rgba(255,255,255,0.4)',marginTop:15}}>
              {
                this.state.data.map((item,key)=>{
                  return(
                    <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={key}>
                    <View style={{flex:1,flexDirection:'row',padding:20}} >
                      <View style={{flex:3,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('IncomeStatement',{graph:item.name})}>
                        <Text style={{fontSize:18,color:'black',textAlign:'center'}}>{item.kpi}</Text></TouchableOpacity>
                      </View>
                      <View style={{flex:2,justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'black',textAlign:'center'}}>{item.value}</Text>
                      </View>
                      <View style={{flex:2,justifyContent:'center'}}>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                          {item.arrow ? <Image source={require('./../../images/up.png')} style={{height:15,marginRight:10,marginTop:5}}/> : <Image source={require('./../../images/down.png')} style={{height:15,marginRight:10,marginTop:5}}/>}
                          <Text style={{fontSize:18,color:'black'}}>{item.margin}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 1,width:'90%'}}/>
                  </View>
                  )
                })
              }
          </View>
          </ScrollView>

        </ImageBackground>
    );
  }
}
