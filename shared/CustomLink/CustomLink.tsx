import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { LinkProps } from 'expo-router/build/link/Link';
import { Colors, Fonts } from '../tokens';

export function CustomLink({ text, ...props }: LinkProps & { text: string }): JSX.Element {
	return (
		<Link {...props} style={styles.link}>
			<Text>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
	link: {
		fontFamily: Fonts.regular,
		fontSize: Fonts.fz18,
		color: Colors.gray,
	},
});
