// =============================================================
// PASSO 2b — Nosso componente Button (arquivo: components/Button.tsx)
// =============================================================
// Mesmo raciocínio do Input: criamos o botão UMA vez aqui e usamos
// com <Button label="Entrar" onPress={...} /> em qualquer tela.
//
// Conceitos:
// - props: aqui o botão recebe um "label" (o texto de dentro).
// - Pressable: elemento nativo que detecta toques.
// - "&": junta dois conjuntos de props (nosso label + tudo de um Pressable).
// - ...rest (spread): repassa o onPress (e o resto) para o Pressable.
//   Ou seja: o onPress NÃO está escrito aqui, ele chega pelo ...rest.
// =============================================================

import { Pressable, PressableProps, StyleSheet, Text } from "react-native"

// label é NOSSA prop. O resto (onPress, disabled...) vem de PressableProps.
type ButtonProps = PressableProps & {
  label: string
}

// Tiramos "label" para mostrar no texto; "...rest" guarda o resto.
export function Button({ label, ...rest }: ButtonProps) {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
