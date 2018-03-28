//Importing React Library components
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from "react-native";

//Importing Additional files
import Dashboard from "./client/views/dashboard.js";
import LocationSelector from "./client/views/selectLocation.js";
import ProductList from "./client/views/productList.js";
import CFODashboard from './client/views/cfoDashboard.js'
import IncomeStatement from './client/views/incomeStatement';

//Importing react-navigation framework
import { StackNavigator } from "react-navigation";

export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  locationSelector: {
    screen: LocationSelector,
    navigationOptions: {
      title: "Dynamic Pricing",
      headerStyle: {
        backgroundColor: "#a3104d"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  productList: {
    screen: ProductList,
    navigationOptions: {
      title: "Products List",
      headerStyle: {
        backgroundColor: "#a3104d"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  CFODashboard: {
    screen: CFODashboard,
    navigationOptions: {
      title: "CFO Dashboard",
      headerStyle: {
        backgroundColor: "#a3104d"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  IncomeStatement: {
    screen: IncomeStatement,
    navigationOptions: {
      title: "CFO Dashboard",
      headerStyle: {
        backgroundColor: "#a3104d"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
});
