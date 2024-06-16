import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from './shared/Button/Button';
import { Colors, FontsSize } from './shared/tokens';

const cover = { uri: require('./assets/images/cover.png') }

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} resizeMode='cover' style={styles.image}></ImageBackground>
      <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Одно из самых вкусных кофе в городе!
            </Text>
            <Text style={styles.description}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </Text>
          </View>
        <Button title='Начать' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  main: {
    justifyContent: 'flex-end',
    gap: 24,
    paddingHorizontal: 30,
    paddingVertical: 43,
    height: '100%',
  },
  image: {
    position: 'absolute',
    bottom: 276,
    width: '100%',
    height: 702,
  },
  header: {
    gap: 8,
  },
  title: {
    fontSize: FontsSize.fz34,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: FontsSize.fz14,
    fontWeight: '400',
    color: Colors.graySecondary,
    textAlign: 'center',
  }
});
