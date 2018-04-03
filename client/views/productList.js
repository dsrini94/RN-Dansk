//Importing React and React-Native Library components
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  ImageBackground,
  ScrollView,
  CheckBox,
  Alert,
  ActivityIndicator
} from 'react-native';

export default class ProductList extends React.Component
{

  componentDidMount()
  {
    fetch('https://dansk-rapid.herokuapp.com/scrape', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },}).then((response) => response.json())
    .then((responseJson) => {
      var array=[];
      array = responseJson.map((item,key)=>{
        item.checked = false;
        item.approved = false;
        return item
      })
      this.setState({products:array,loader:false})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  constructor()
  {
    super();
    this.state={
      loader:true,
      products:[],
      modalVisible:false,
      productList:[{
        name:'Avacado',
        percentage:'25%',
        price:'£5',
        url:'http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png',
        cp:'£10',
        otd:5,
        competitorName:'Reema',
        competitorPrice:8,
        np:8,
        nm:'75%',
        checked:false,
        approved:false

      },{
        name:'pomegranate',
        percentage:'30%',
        price:'£7',
        url:'https://dtgxwmigmg3gc.cloudfront.net/files/53d85081e1272f5c690000e3-icon-256x256.png',
        cp:'£9',
        otd:5,
        competitorName:'Reema',
        competitorPrice:8,
        np:8,
        nm:'75%',
        checked:false,
        approved:false
      },{
        name:'Mangoes',
        percentage:'10%',
        price:'£4',
        url:'http://www.pngmart.com/files/1/Mango-PNG.png',
        cp:'£5',
        otd:5,
        competitorName:'Reema',
        competitorPrice:8,
        np:8,
        nm:'75%',
        checked:false,
        approved:false
      },{
        name:'Apple',
        percentage:'5%',
        price:'£5',
        url:'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
        cp:'£6',
        otd:5,
        competitorName:'Reema',
        competitorPrice:8,
        np:8,
        nm:'75%',
        checked:false,
        approved:false
      }],
      productSelected:false,
      selectedProducts:[],
      productsModal:false,
      modalSubmit:false,
      modalMsg:'Select a Product',
      sltPdtInfo:{}
    }
  }

  handleSubmit()
  {
    var tempArray = [];
        tempArray = this.state.products.map((item)=>{
            if(item.checked == true)
                item.approved = true;
                return item;
        })

        if(this.state.productSelected == true)
            this.setState({modalMsg:'Products have Approved Successfully'})

        this.setState({modalSubmit:true,productList:tempArray,selectedProducts:[]});
  }


  handleModalSubmit()
  {
      var temp = [],selectedTempArray=[];
          temp = this.state.products.filter((item)=>{
            if(item.productName != this.state.sltPdtInfo.productName)
                return item
          })

          selectedTempArray = this.state.selectedProducts.filter((item)=>{

            if(item.productName != this.state.sltPdtInfo.productName)
                return item

          })

      this.setState({products:temp,modalVisible:!this.state.modalVisible,selectedProducts:selectedTempArray})
  }


  handleChage(pdt)
  {
    var tempArray=[],selectedProducts=this.state.selectedProducts;

    tempArray = (this.state.products.map((item)=>{
      if(item.productName == pdt.productName)
      {
        if(item.checked == false)
        {
          item.checked = true;
          if(this.checkDuplicate(selectedProducts,pdt) == false)
          {
            selectedProducts.push(pdt);
          }
          return item;
        }
        else{
          item.checked = false;
          return item;
        }
      }
      else
        return item;
    }))



    this.setState({products:tempArray,selectedProducts:selectedProducts,productSelected:true})

  }

  checkDuplicate(arr, val) {
    return arr.some(function(arrVal) {
      return val.productName === arrVal.productName;
    });
  }

  render()
  {
    console.log('--->',this.state.products);
    let pic ='./../../images/d1.jpeg';
    let pic1 ='./../../images/avocado.png';

    if(this.state.loader)
    {
      return(
        <ImageBackground source={require(pic)} style={{flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(255,255,255,0.2)'}}>
          <ActivityIndicator size="large" color="#a3104d" animating={this.state.loader} />
          <Text style={{color:'black',fontSize:18}}>Fetchin Data...</Text>
        </View>
        </ImageBackground>
      )
    }
    else {
      return(
        <ImageBackground source={require(pic)} style={{flex:1}}>

            <ScrollView>
              {
                this.state.products.map((item,key)=>{
                  if(item.approved == false)
                  {
                  return(
                    <View key={key} style={{flexDirection:'row',padding:10,marginLeft:10,marginRight:10,marginTop:15,backgroundColor:'rgba(255,255,255,0.9)'}}>

                      <View style={{flex:3}}>
                        <Image source={{uri:item.url}} style={{width:100,height:100}}/>
                      </View>

                      <View style={{flex:3,flexDirection:'column',alignItems:'center'}}>
                        <Text style={{color:'black',fontSize:17,marginBottom:10,color:'#a3104d'}}>{item.productName}</Text>

                        <View style={{flexDirection:'row',marginLeft:10}}>
                          <View style={{flexDirection:'column',paddingRight:15}}>
                            <Text style={{color:'black',fontSize:17,marginBottom:10}}>CP</Text>
                            <Text style={{color:'black',fontSize:17,marginBottom:10}}>£{item.currentPrice}</Text>
                          </View>

                          <View style={{flexDirection:'column',paddingRight:15}}>
                            <Image source={require('./../../images/caret-arrow-up.png')} style={{paddingTop:3}}/>
                            <Text style={{color:'black',fontSize:17,marginTop:9}}>{item.margin}%</Text>
                          </View>


                          <View style={{flexDirection:'column',paddingRight:10}}>
                            <Text style={{color:'black',fontSize:17,marginBottom:10}}>NP</Text>
                            <Text style={{color:'black',fontSize:17,marginBottom:10}}>£{item.newPrice}</Text>
                          </View>
                        </View>

                      </View>

                      <View style={{flexDirection:'row',flex:2,justifyContent:'flex-end',paddingRight:20,paddingTop:10}}>
                        <View style={{flexDirection:'column'}}>
                          <TouchableOpacity onPress={()=>{this.setState({modalVisible:!this.state.modalVisible,sltPdtInfo:item})}}>
                            <Image source={require('./../../images/info.png')} />
                          </TouchableOpacity>
                          <TouchableOpacity style={{marginTop:17}} >
                            <CheckBox style={{marginLeft:-3}} value={item.checked} onChange={this.handleChage.bind(this,item)}/>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>
                  );
                }
                })
              }
              <View style={{marginBottom:100}}>
              </View>
              </ScrollView>








          <View style={{width:'100%',flexDirection:'row',position:'absolute',bottom:0,justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{flex:1}} onPress={()=>{this.setState({productsModal:true})}}>
              <Text style={{backgroundColor:'#a3104d',borderWidth:1,color:'white',padding:15,fontSize:18,textAlign:'center'}}>View Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}} onPress={this.handleSubmit.bind(this)}>
              <Text style={{backgroundColor:'white',borderWidth:1,padding:15,fontSize:18,textAlign:'center',color:'#a3104d'}}>Approve</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible:!this.state.modalVisible});
            }}>
            <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
            <ScrollView style={{flex:1}}>
              <View style={{alignItems:'center'}}>
                <Text style={{marginTop:10,fontSize:20,color:'#a3104d',fontSize:25}}>Product Information</Text>
                <Image source={{uri:'http://www.freepngimg.com/download/avocado/1-2-avocado-png-clipart.png'}} style={{width:100,height:100,marginTop:20}}/>
              </View>

              <View style={{alignItems:'center'}}>
                <Text style={{color:'black',fontSize:15}}>Product Name</Text>
                <Text style={{color:'#a3104d',fontSize:25}}>{this.state.sltPdtInfo.productName}</Text>
              </View>

              <View style={{alignItems:'center',marginTop:19}}>
                <Text style={{color:'black',fontSize:15}}>New Price</Text>
                <Text style={{color:'#a3104d',fontSize:25}}>£{this.state.sltPdtInfo.newPrice}</Text>
              </View>

              <View style={{alignItems:'center',marginTop:19}}>
                <Text style={{color:'black',fontSize:15}}>Current Price</Text>
                <Text style={{color:'#a3104d',fontSize:25}}>£{this.state.sltPdtInfo.currentPrice}</Text>
              </View>

              <View style={{alignItems:'center',marginTop:19}}>
                <Text style={{color:'black',fontSize:15}}>% Gain in Margin</Text>
                <Text style={{color:'#a3104d',fontSize:25}}>{this.state.sltPdtInfo.margin}</Text>
              </View>

              <View style={{alignItems:'center',marginTop:19}}>
                <Text style={{color:'black',fontSize:15}}>Out of the DOor Price</Text>
                <Text style={{color:'#a3104d',fontSize:25}}>£{this.state.sltPdtInfo.outOftheDoor}</Text>
              </View>

              <View style={{alignItems:'center',marginTop:19,marginBottom:100}}>
                <View style={{borderWidth:1,padding:15,alignItems:'center',borderColor:'#a3104d'}}>
                  <Text style={{color:'black',fontSize:15}}>{this.state.sltPdtInfo.companyName}'s Price</Text>
                  <Text style={{color:'#a3104d',fontSize:25}}>£{this.state.sltPdtInfo.productPrice}</Text>
                </View>
              </View>






            </ScrollView>

                <View style={{width:'100%',flexDirection:'row',position:'absolute',bottom:0,justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{flex:1}} onPress={()=>{this.setState({modalVisible:!this.state.modalVisible})}}>
                  <Text style={{backgroundColor:'#a3104d',color:'white',borderWidth:1,padding:15,fontSize:18,textAlign:'center'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={this.handleModalSubmit.bind(this)}>
                  <Text style={{backgroundColor:'white',padding:15,borderWidth:1,fontSize:18,textAlign:'center',color:'black'}}>Approve</Text>
                </TouchableOpacity>
              </View>

            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.productsModal}
            onRequestClose={() => {
              this.setState({productsModal:!this.state.productsModal});
            }}>
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView>
                <Text style={{color:'#a3104d',textAlign:'center',marginTop:15,fontSize:25}}>Selected Products</Text>
                {this.state.selectedProducts.map((item,key)=>{
                  return(
                    <View key={key} style={{flexDirection:'row',padding:10,marginLeft:10,marginRight:10,marginTop:15,backgroundColor:'#a3104d'}}>

                      <View style={{flex:3}}>
                        <Image source={{uri:item.url}} style={{width:100,height:100}}/>
                      </View>

                      <View style={{flex:3,flexDirection:'column',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:17,marginBottom:10}}>{item.productName}</Text>

                        <View style={{flexDirection:'row',marginLeft:10}}>
                          <View style={{flexDirection:'column',paddingRight:15}}>
                            <Text style={{color:'white',fontSize:17,marginBottom:10}}>CP</Text>
                            <Text style={{color:'white',fontSize:17,marginBottom:10}}>£{item.currentPrice}</Text>
                          </View>

                          <View style={{flexDirection:'column',paddingRight:15}}>
                            <Image source={require('./../../images/caret-arrow-up.png')} style={{paddingTop:3}}/>
                            <Text style={{color:'white',fontSize:17,marginTop:9}}>{item.margin}%</Text>
                          </View>


                          <View style={{flexDirection:'column',paddingRight:10}}>
                            <Text style={{color:'white',fontSize:17,marginBottom:10}}>NP</Text>
                            <Text style={{color:'white',fontSize:17,marginBottom:10}}>£{item.newPrice}</Text>
                          </View>
                        </View>

                      </View>

                      <View style={{flexDirection:'row',flex:2,justifyContent:'flex-end',paddingRight:20,paddingTop:10}}>
                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity onPress={()=>{this.setState({modalVisible:!this.state.modalVisible,sltPdtInfo:item})}}>
                          <Image source={require('./../../images/info1.png')} />
                        </TouchableOpacity>
                          <TouchableOpacity style={{marginTop:17}} >
                            <CheckBox style={{marginLeft:-3}} value={item.checked} onChange={this.handleChage.bind(this,item)}/>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>
                  );
                })}

              </ScrollView>

              <View style={{width:'100%',flexDirection:'row',position:'absolute',bottom:0,justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{flex:1}} onPress={()=>{this.setState({productsModal:!this.state.productsModal})}}>
                  <Text style={{backgroundColor:'#a3104d',color:'white',borderWidth:1,padding:15,fontSize:18,textAlign:'center'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={this.handleSubmit.bind(this)}>
                  <Text style={{backgroundColor:'white',padding:15,borderWidth:1,fontSize:18,textAlign:'center',color:'black'}}>Approve</Text>
                </TouchableOpacity>
              </View>

            </View>
          </Modal>

          <Modal transparent={true} visible={this.state.modalSubmit} animationType={'fade'} onRequestClose={() => {this.setState({modalSubmit:!this.state.modalSubmit})}}>

          <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.5)'}}>

            <View style={{
                width: '80%',
                backgroundColor: '#a3104d',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{margin: 10,fontSize: 16,color: 'white'}}>{this.state.modalMsg}</Text>

              <TouchableHighlight style={{alignItems:'center',backgroundColor:'white',margin:25}}
                onPress={() => {
                  this.setState({modalSubmit:!this.state.modalSubmit,productSelected:false,modalMsg:'Select a Product'});
                }}>
                <Text style={{fontSize:20,color:'#a3104d',padding:9,paddingLeft:15,paddingRight:15}}>Close</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        </ImageBackground>
      );
    }



  }
}
