import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    renderRow({ item, index }) {
        return <ListItem library={item}/>;
    }

    keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                extraData={this.state}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);