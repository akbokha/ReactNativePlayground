import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Mark Zuckerberg"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="06 12345678"
          />
        </CardSection>
        <CardSection>

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

export default EmployeeCreate