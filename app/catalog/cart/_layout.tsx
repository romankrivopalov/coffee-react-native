import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function CartLayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="dark" />
		</SafeAreaProvider>
	);
}
