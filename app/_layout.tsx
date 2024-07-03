import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const insets = useSafeAreaInsets();

	const [loaded, error] = useFonts({
		SoraRegular: require('../assets/fonts/Sora-Regular.ttf'),
		SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	if (!loaded) return null;

	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Slot
				screenOptions={{
					contentStyle: {
						paddingTop: Platform.OS === 'android' ?? insets.top,
					},
				}}
			/>
		</SafeAreaProvider>
	);
}
