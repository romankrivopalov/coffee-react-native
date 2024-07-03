import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function CatalogLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="dark" />
			<Stack
				screenOptions={{
					statusBarColor: Colors.white,
					headerShown: true, // show head title
					contentStyle: {
						backgroundColor: Colors.white,
					},
				}}
			>
				<Stack.Screen
					name={'catalog'}
					options={{
						title: 'catalog',
					}}
				/>
				<Stack.Screen
					name={'address'}
					options={{
						title: 'address',
					}}
				/>
				<Stack.Screen
					name={'cart'}
					options={{
						title: 'cart',
					}}
				/>
				<Stack.Screen
					name={'success'}
					options={{
						title: 'success',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
