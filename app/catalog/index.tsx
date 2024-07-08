import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';

export default function Catalog() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Catalog</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: Colors.black,
	},
});
