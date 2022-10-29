import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
const Button = (props) => {
    const { onPress, title } = props;
    const onPressHandler = () => {
        onPress();
        console.log('--Package On Press Log 2  Check--');
    };
    return (<TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({ container: { width: '100%', height: 50 } });
export default Button;
