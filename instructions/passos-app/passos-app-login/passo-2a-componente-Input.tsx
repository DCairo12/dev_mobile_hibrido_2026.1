// =============================================================
// PASSO 2a — Nosso componente Input (arquivo: components/Input.tsx)
// =============================================================
// Aqui aparece o conceito de "elemento próprio": em vez de usar o
// TextInput direto em toda tela, criamos UMA caixa de texto reutilizável
// e já estilizada. Escrevemos aqui uma vez, usamos em qualquer lugar.
//
// Conceitos:
// - props: os "parâmetros" que um componente recebe.
// - TextInput: o campo de texto nativo do React Native.
// - TextInputProps: o "tipo" com TODAS as props que um TextInput aceita
//   (placeholder, onChangeText, secureTextEntry, keyboardType, ...).
// - ...rest (spread): "pegue todas as outras props e repasse".
//   É POR CAUSA do ...rest que, nos próximos passos, basta escrever
//   secureTextEntry ou keyboardType NA TELA e já funciona — sem
//   precisar voltar e editar este arquivo de novo.
// =============================================================

import { StyleSheet, TextInput, TextInputProps } from "react-native"

// Nosso Input aceita exatamente as mesmas props de um TextInput.
// Separamos "style" para juntar nosso estilo base com um estilo extra
// (caso alguém queira personalizar um campo específico);
// "...rest" carrega TODO o resto (placeholder, onChangeText, etc.).
export function Input({ style, ...rest }: TextInputProps) {
  return (
    <TextInput
      style={[styles.input, style]}          // [estilo base, estilo extra]
      placeholderTextColor="#9CA3AF"
      {...rest}                              // repassa todas as outras props
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
})
