import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
const Button = (props) => {
    const { onPress, title } = props;
    return (<TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({ container: { width: "100%", height: 50 } });
export default Button;
