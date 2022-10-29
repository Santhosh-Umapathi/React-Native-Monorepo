"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Button = function (props) {
    var onPress = props.onPress, title = props.title;
    var onPressHandler = function () {
        onPress();
        console.log('--Package On Press Log 2  Check--');
    };
    return (<react_native_1.TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <react_native_1.Text>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({ container: { width: '100%', height: 50 } });
exports["default"] = Button;
