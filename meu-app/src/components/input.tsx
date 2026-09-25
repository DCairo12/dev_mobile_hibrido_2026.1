import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function Input({ style, ...rest }: TextInputProps) {
  return (
    <TextInput 
      style={[styles.input, style]} 
      placeholderTextColor="#999"
      {...rest} 
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
