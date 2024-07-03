import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from '../shared/Button/Button';
import { Colors, Fonts } from '../shared/tokens';
import { CustomLink } from '../shared/CustomLink/CustomLink';

const cover = { uri: '../assets/images/cover.png' };

export default function Index() {
	const animatedValue = new Animated.Value(-58);

	Animated.timing(animatedValue, {
		toValue: 0,
		duration: 1000,
		useNativeDriver: true,
	}).start();

	return (
		<View style={styles.container}>
			<ImageBackground source={cover} resizeMode="cover" style={styles.image}></ImageBackground>
			<View style={styles.main}>
				<View style={styles.header}>
					<Animated.Text style={{ ...styles.title, transform: [{ translateY: animatedValue }] }}>
						Одно из самых вкусных кофе в городе!
					</Animated.Text>
					<Text style={styles.description}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
				</View>
				<Button title="Начать" />
				{/*<CustomLink href={'/catalog'} text={'catalog'} />*/}
				{/*<CustomLink href={'/catalog/00121'} text={'coffee page'} />*/}
				{/*<CustomLink href={'catalog/address'} text={'addresse'} />*/}
				{/*<CustomLink href={'catalog/cart'} text={'cart'} />*/}
				{/*<CustomLink href={'catalog/success'} text={'success'} />*/}
				{/*<CustomLink href={'/notfound'} text={'not found page'} />*/}
			</View>
			<StatusBar style="auto" />
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
		fontFamily: Fonts.semiBold,
		fontSize: Fonts.fz34,
		fontWeight: '600',
		color: Colors.white,
		textAlign: 'center',
	},
	description: {
		fontFamily: Fonts.regular,
		fontSize: Fonts.fz14,
		fontWeight: '400',
		color: Colors.gray,
		textAlign: 'center',
	},
});
