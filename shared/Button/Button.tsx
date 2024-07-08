import {
	PressableProps,
	Pressable,
	Text,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, Fonts } from '../tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.beigeHover, Colors.beige],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View style={{ ...styles.button, backgroundColor: color }}>
				<Text style={styles.title}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
		height: 52,
		backgroundColor: Colors.beige,
		borderRadius: 16,
	},
	title: {
		fontFamily: Fonts.semiBold,
		fontSize: Fonts.fz16,
		fontWeight: '600',
		color: Colors.white,
	},
});
