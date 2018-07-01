import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import { Section } from "./common";
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {


    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }


    renderDescription() {
        const { library, expanded } = this.props;
        const { descriptionStyle } = styles;
        if (expanded) {
            return (
                <Section>
                    <Text style={descriptionStyle}>
                        {library.description}
                    </Text>
                </Section>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <Section>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </Section>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },

    descriptionStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    return { expanded: state.selectedLibraryId === ownProps.library.id };
};

export default connect(mapStateToProps, actions)(ListItem);