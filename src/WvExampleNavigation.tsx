import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

const WvExampleNavigation = () => {
  const webview = useRef(null);

  const handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const {url} = newNavState;
    console.log('newNavState -->', newNavState);

    if (!url) {
      return;
    }

    // handle certain doctypes
    if (url.includes('.pdf')) {
      (webview as any).current.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      (webview as any).current.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      (webview as any).stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      (webview as any).current.injectJavaScript(redirectTo);
    }
  };

  return (
    <WebView
      ref={webview}
      originWhitelist={['*']}
      source={{uri: 'https://react.dev/'}}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  );
};

export default WvExampleNavigation;
