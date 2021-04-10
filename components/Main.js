import React, { Component } from "react"
import Directory from "./Directory"
import CampsiteInfo from "./CampsiteInfo"
import { createStackNavigator } from "react-navigation-stack"
import { View, Platform } from "react-native"
import { createAppContainer } from "react-navigation"

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initalRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
)

const AppNavigator = createAppContainer(DirectoryNavigator)

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    )
  }
}

export default Main
