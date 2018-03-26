//Importing React Library components
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Picker,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  TextInput,
  ScrollView
} from "react-native";

//importing external framework for drowpdown modal
import ModalSelector from "react-native-modal-selector";

export default class LocationSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "",
      textInputValue: "",
      products: "Select a Product",
      country: "Select a location"
    };
  }

  render() {
    let index = 0;
    const data = [
      { key: index++, label: "Sollentuna" },
      { key: index++, label: "Hägersten" },
      { key: index++, label: "Skärholmen" }
    ];

    let index1 = 0;
    const data1 = [
      { key: index1++, label: "Vegetables" },
      { key: index1++, label: "Fruits" },
      { key: index1++, label: "Oil" },
      { key: index1++, label: "Packaged Items" }
    ];

    return (
      <ImageBackground
        source={require("./../../images/d1.jpeg")}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./../../images/locator.png")}
              style={{ marginTop: 30 }}
            />
          </View>
          <View style={{ alignItems: "center", margin: 20 }}>
            <ModalSelector
              style={{ backgroundColor: "rgba(17, 216, 213,1)" }}
              data={data}
              initValue={this.state.country}
              supportedOrientations={["landscape"]}
              accessible={true}
              scrollViewAccessibilityLabel={"Scrollable options"}
              cancelButtonAccessibilityLabel={"Cancel Button"}
              onChange={option => {
                this.setState({ country: option.label });
              }}
            >
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
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Image source={require("./../../images/cart.png")} />

            <ModalSelector
              style={{ backgroundColor: "rgba(17, 216, 213,1)",marginTop:20 }}
              data={data1}
              initValue={this.state.products}
              supportedOrientations={["landscape"]}
              accessible={true}
              scrollViewAccessibilityLabel={"Scrollable options"}
              cancelButtonAccessibilityLabel={"Cancel Button"}
              onChange={option => {
                this.setState({ products: option.label });
              }}
            >
              <TextInput
                style={{
                  borderColor: "#ccc",
                  color: "white",
                  fontSize: 20,
                  padding: 10
                }}
                editable={false}
                placeholder="Select something yummy!"
                value={this.state.products}
              />
            </ModalSelector>

          </View>

          <View style={{ alignItems: "center", marginTop: 50,marginBottom:50 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                borderWidth: 2,
                borderColor: "white"
              }}
              onPress={() => this.props.navigation.navigate("productList")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 15
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
