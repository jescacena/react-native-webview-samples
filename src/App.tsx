import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WvExampleInjectAfter from './WvExampleInjectAfter';
import WvExampleInjectAnyTime from './WvExampleInjectAnyTime';
import WvExampleInjectBefore from './WvExampleInjectBefore';
import WvExampleCHAll from './WvExampleCHAll';
import WvExampleCHFirst from './WvExampleCHFirst';
import WvExampleJsInterface from './WvExampleJsInterface';
import WvExampleNavigation from './WvExampleNavigation';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const handleExampleNavigation = () => {
    navigation.navigate('WVExampleNavigation');
  };

  const handleExampleInjectingAfter = () => {
    navigation.navigate('WVExampleInjectAfter');
  };

  const handleExampleInjectingBefore = () => {
    navigation.navigate('WVExampleInjectBefore');
  };
  const handleExampleInjectingAnyTime = () => {
    navigation.navigate('WVExampleInjectAnyTime');
  };

  const handleExampleCHFirst = () => {
    navigation.navigate('WvExampleCHFirst');
  };
  const handleExampleCHAll = () => {
    navigation.navigate('WvExampleCHAll');
  };

  const handleExampleJsInterface = () => {
    navigation.navigate('WVExampleJsInterface');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.title}>Webview examples</Text>
        <View>
          <Section title="Injecting Javascript After Content Loaded">
            <Button
              onPress={handleExampleInjectingAfter}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title="Injecting Javascript Before Content Loaded">
            <Button
              onPress={handleExampleInjectingBefore}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title="Injecting Javascript Any time">
            <Button
              onPress={handleExampleInjectingAnyTime}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title="Controlling navigation state changes">
            <Button
              onPress={handleExampleNavigation}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title="Setting Cookies/Headers in first url">
            <Button
              onPress={handleExampleCHFirst}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title="Setting Cookies/Headers in all urls">
            <Button
              onPress={handleExampleCHAll}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
          <Section title=" Communicating between JS and Native">
            <Button
              onPress={handleExampleJsInterface}
              title="Open example"
              color="#841584"
              accessibilityLabel="Open webview"
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WVExampleNavigation"
          component={WvExampleNavigation}
        />
        <Stack.Screen
          name="WVExampleInjectAfter"
          component={WvExampleInjectAfter}
        />
        <Stack.Screen
          name="WVExampleInjectBefore"
          component={WvExampleInjectBefore}
        />
        <Stack.Screen
          name="WVExampleInjectAnyTime"
          component={WvExampleInjectAnyTime}
        />
        <Stack.Screen
          name="WVExampleJsInterface"
          component={WvExampleJsInterface}
        />
        <Stack.Screen name="WvExampleCHFirst" component={WvExampleCHFirst} />
        <Stack.Screen name="WvExampleCHAll" component={WvExampleCHAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
