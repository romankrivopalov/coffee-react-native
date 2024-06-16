import { PressableProps, Pressable, Text, View, StyleSheet } from 'react-native';
import { Colors, FontsSize } from '../tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
    return (
        <Pressable {...props}>
            <View style={styles.button}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        backgroundColor: Colors.beige,
        borderRadius: 16,
    },
    title: {
        fontSize: FontsSize.fz16,
        fontWeight: '600',
        color: Colors.white,
    }
})