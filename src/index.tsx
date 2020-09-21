import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Viewport } from './assets/styles';
import { Home } from './pages';

const Index = () => {
    return (
        <SafeAreaView style={Viewport.safeAreaView}>
            <StatusBar style="auto" />
            <Home />
        </SafeAreaView>
    );
}

export default Index;
