import React from 'react';
import {WebView} from 'react-native-webview';

const WvExampleInjectAfter = () => {
  const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
  return (
    <WebView
      source={{
        uri: 'https://github.com/react-native-webview/react-native-webview',
      }}
      onMessage={event => {}}
      injectedJavaScript={runFirst}
    />
  );
};

export default WvExampleInjectAfter;
