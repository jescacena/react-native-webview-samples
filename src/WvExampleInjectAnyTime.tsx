import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

const WvExampleInjectAnyTime = () => {
  const webview = useRef(null);

  const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;

  setTimeout(() => {
    (webview as any).current.injectJavaScript(run);
  }, 3000);
  return (
    <WebView
      ref={webview}
      source={{
        uri: 'https://github.com/react-native-webview/react-native-webview',
      }}
    />
  );
};

export default WvExampleInjectAnyTime;
