import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Mark Zuckerberg"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="06 12345678"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.shiftTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="mon"/>
            <Picker.Item label="Tuesday" value="tue"/>
            <Picker.Item label="Wednesday" value="wed"/>
            <Picker.Item label="Thursday" value="thu"/>
            <Picker.Item label="Friday" value="fri"/>
            <Picker.Item label="Saturday" value="sat"/>
            <Picker.Item label="Sunday" value="sun"/>
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  shiftTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.emp
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)