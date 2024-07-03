import { Text, StyleSheet, Alert, ToastAndroid, Platform, View } from 'react-native';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { Colors, Fonts } from '../shared/tokens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';

export default function UnmatchedDefaultCustom() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		// alert
		Alert.alert('Заголовок ошибки', 'сообщение ошибки', [
			{
				text: 'текст кнопки',
				onPress: () => {},
				style: 'cancel',
			},
		]);

		// toast only for Android
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('сообщение ошибки', ToastAndroid.SHORT, ToastAndroid.CENTER);
		}
	};

	const customAlert = () => {
		setError('текст кастомной ошибки');
	};

	return (
		<SafeAreaView style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Text style={styles.title}>Ничего нет</Text>
				<Button title={'тест ошибки'} onPress={alert} />
				<Button title={'кастомная ошибка'} onPress={customAlert} />
				<CustomLink href={'/'} text={'на главную'} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: Colors.white,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
	},
	title: {
		fontFamily: Fonts.semiBold,
		fontSize: Fonts.fz24,
		color: Colors.black,
	},
});
