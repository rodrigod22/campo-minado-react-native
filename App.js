import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import params from './src/params';
import Field from './src/components/Field'

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        Iniciando o Mines !!!
      </Text>
      <Text style={styles.sectionTitle}>
        Tamanho da grade:
        {params.getRowsAmount()} X {params.getColumnsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={7} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FEFEFE"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
