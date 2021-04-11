import React, { Component } from "react"
import { Card, Text } from "react-native-elements"
import { ScrollView } from "react-native"

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = {
    title: "Contact",
  }
  render() {
    return (
      <ScrollView>
        <Card title={"Contact Information"} wrapperStyle={{ margin: 20 }}>
          <Text style={{ marginBottom: 10 }}>
            1 Nucamp Way {"\n"} Seattle, WA 98001 {"\n"} U.S.A.
          </Text>
          <Text>{""}</Text>
          <Text>Phone: 1-206-555-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    )
  }
}

export default Contact
