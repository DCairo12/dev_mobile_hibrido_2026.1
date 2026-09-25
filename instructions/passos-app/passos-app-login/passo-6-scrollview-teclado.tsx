// =============================================================
// PASSO 6 — Rolagem (ScrollView) e teclado que não cobre os campos
// Arquivo: app/index.tsx
// =============================================================
// Problema: em telas pequenas o conteúdo não cabe e o teclado tapa os
// campos. Vamos permitir ROLAR e afastar o conteúdo do teclado.
//
// Conceitos novos:
// - ScrollView: permite ROLAR quando o conteúdo é maior que a tela.
//     * O estilo do conteúdo vai em "contentContainerStyle".
//     * Por isso o container troca flex: 1  ->  flexGrow: 1.
// - keyboardShouldPersistTaps="handled": deixa tocar num botão mesmo
//   com o teclado aberto.
// - KeyboardAvoidingView: "empurra" o conteúdo para o teclado não cobrir.
//     * behavior="height" costuma ir bem no Android; "padding" no iOS.
// =============================================================

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.')
      return
    }
    Alert.alert('Sucesso', `Login realizado com email: ${email}`)
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('@/app/assets/images (1).png')}
          style={styles.illustration}
          resizeMode="contain"
        />
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha</Text>

        <View style={styles.form}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />
          <Button label="Entrar" onPress={handleSignIn} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,                // <- mudou de flex:1 para flexGrow:1
    alignItems: 'center',
    justifyContent: 'center',
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
  form: {
    width: '100%',
    marginTop: 24,
    gap: 12,
  },
})
