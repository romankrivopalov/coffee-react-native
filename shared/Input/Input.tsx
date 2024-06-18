import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../tokens';

export function Input(props: TextInputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={Colors.gray}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 315,
        height: 52,
        backgroundColor: '#313131',
        borderRadius: 16,
    }
})