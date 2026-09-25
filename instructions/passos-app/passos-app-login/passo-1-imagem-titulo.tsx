// =============================================================
// PASSO 1 — Estrutura inicial: imagem + títulos
// Arquivo: app/index.tsx
// =============================================================
// Objetivo: revisar o que fizemos na última aula.
// Só a IMAGEM e os TEXTOS na tela.
//
// Conceitos:
// - Componente: uma função que retorna "elementos" (JSX) que viram tela.
// - View: contêiner que agrupa outros elementos (parecido com <div>).
// - Text: todo texto na tela PRECISA estar dentro de <Text>.
// - Image: exibe uma imagem; "require" carrega um arquivo local.
// - StyleSheet: onde definimos os estilos.
//
// Repare: aqui ainda usamos SÓ elementos nativos do React Native.
// No passo 2 vamos criar os NOSSOS próprios componentes (Input e Button).
// =============================================================

import { Image, StyleSheet, Text, View } from "react-native"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/app/assets/images (1).png')}
        style={styles.illustration}
        resizeMode="contain"
      />
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    // ocupa a tela inteira
    alignItems: 'center',       // centraliza na horizontal
    justifyContent: 'center',   // centraliza na vertical
    backgroundColor: 'white',
    padding: 32,
  },
  illustration: {
    width: '100%',
    height: 400,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
})
