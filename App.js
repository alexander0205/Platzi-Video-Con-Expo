import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from './src/sections/components/loading';
import AppLayout from './src/app';
import AppNavigatorWithState from './src/app-navigator-with-state';

type Props = {};
export default function App() {
  return (
    <Provider
      store={store}
    >
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <AppNavigatorWithState />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
