import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const whatGlobo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export class About extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/logo.png')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/laptop2.jpg')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})