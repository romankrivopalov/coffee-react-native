import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../tokens';

export function Input(props: TextInputProps) {
	return <TextInput {...props} style={styles.input} placeholderTextColor={Colors.gray} />;
}

const styles = StyleSheet.create({
	input: {
		width: 315,
		height: 52,
		backgroundColor: Colors.graySecondary,
		borderRadius: 16,
	},
});
