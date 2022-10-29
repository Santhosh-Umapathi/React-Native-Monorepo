import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
const WelcomeScreen = (props) => {
    const {} = props;
    return (<View style={styles.container}>
      <Text>{'Welcome Screen'}</Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default WelcomeScreen;
