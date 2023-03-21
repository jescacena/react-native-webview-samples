import React from 'react';
import {WebView} from 'react-native-webview';

const WvExampleInjectBefore = () => {
  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;
  return (
    <WebView
      source={{
        uri: 'https://github.com/react-native-webview/react-native-webview',
      }}
      onMessage={event => {}}
      injectedJavaScriptBeforeContentLoaded={runFirst}
    />
  );
};

export default WvExampleInjectBefore;
