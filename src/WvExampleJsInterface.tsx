import React from 'react';
import {Alert} from 'react-native';
import {WebView} from 'react-native-webview';

const WvExampleJsInterface = () => {
  const html = `
      <html>
      <head></head>
      <body>
				<div style="display:inline-block;width:100%; background-color: lightgrey; text-align: center;">
					<h1>Saying Hello! to native</h1>
				</div>
        <script>
          setTimeout(function () {
            window.ReactNativeWebView.postMessage("Hello!")
          }, 2000)
        </script>
      </body>
      </html>
    `;
  return (
    <WebView
      source={{html}}
      onMessage={event => {
        Alert.alert('Message from webview', event.nativeEvent.data, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }}
    />
  );
};

export default WvExampleJsInterface;
