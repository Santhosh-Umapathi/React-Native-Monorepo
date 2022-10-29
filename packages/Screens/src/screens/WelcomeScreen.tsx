import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

const WelcomeScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>{'Welcome Screen'}</Text>
    </View>
  );
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
