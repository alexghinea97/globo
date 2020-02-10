import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';
import { createStackNavigator } from 'react-navigation-stack';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header navigate = {navigate} message = 'Press to Login' />
                <Hero />
                <Menu navigate = {navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

//AIzaSyAaC_8-H6aak7eplurGNlJgZXj-6rJt7Y8