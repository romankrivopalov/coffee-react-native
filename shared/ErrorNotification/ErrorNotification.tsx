import { ErrorNotificationProps } from './ErrorNotification.props';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../tokens';

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false);

	useEffect(() => {
		if (!error) return;

		setIsShown(true);
		const timer = setTimeout(() => setIsShown(false), 2000);

		return () => clearTimeout(timer);
	}, [error]);

	if (!isShown) return <></>;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		width: '100%',
		padding: 16,
		backgroundColor: Colors.red,
	},
	text: {
		color: Colors.white,
	},
});
