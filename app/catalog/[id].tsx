import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function CoffeePage() {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Stack.Screen
				options={{
					title: `Страница кофе ${id}`,
				}}
			/>
			<Text>Id страницы с кофе {id}</Text>
		</View>
	);
}
