import React from 'react';
import WebView from 'react-native-webview';

const Home = () => {
  return (
    <WebView
      allowsFullscreenVideo
      source={{ uri: 'https://jesuslives.tv' }}
    />
  );
}

export default Home;
