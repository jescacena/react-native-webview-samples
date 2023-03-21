import React from 'react';
import {WebView} from 'react-native-webview';

const WvExampleCHFirst = () => {
  return (
    <WebView
      source={{
        uri: 'https://github.com/react-native-webview/react-native-webview',
        headers: {
          'my-custom-header-key': 'my-custom-header-value',
          Cookie: 'cookie1=asdf; cookie2=dfasdfdas',
        },
      }}
      sharedCookiesEnabled={true}
    />
  );
};

export default WvExampleCHFirst;
