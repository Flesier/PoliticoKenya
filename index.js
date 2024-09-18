/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Platform } from 'react-native';

if (Platform.OS === 'web') {
    const rootElement = document.getElementById('root') || document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
    AppRegistry.runApplication(appName, {
      initialProps: {},
      rootTag: rootElement,
    });
  } else {
    AppRegistry.registerComponent(appName, () => App);
  }
