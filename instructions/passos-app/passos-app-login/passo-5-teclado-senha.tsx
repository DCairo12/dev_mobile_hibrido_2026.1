// =============================================================
// PASSO 5 — Propriedades dos campos: esconder senha e tipo de teclado
// Arquivo: app/index.tsx
// =============================================================
// Melhoramos a experiência dos campos só passando PROPS novas ao Input.
//
// LEMBRE A TURMA: essas props funcionam porque no passo 2 usamos ...rest
// dentro do Input. Nada de novo no Input.tsx — ele já repassa tudo.
//
// Props novas (vão para o Input):
// - keyboardType="email-address": teclado com "@" e ".com".
// - autoCapitalize="none": não deixa a 1ª letra virar maiúscula.
// - secureTextEntry: esconde os caracteres da senha (•••).
// =============================================================

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { useState } from "react"
import { Alert, Image, StyleSheet, Text, View } from "react-native"

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
    <View style={styles.container}>
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
          keyboardType="email-address"   // teclado apropriado para e-mail
          autoCapitalize="none"          // sem maiúscula automática
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          secureTextEntry                // esconde a senha (•••)
          onChangeText={setPassword}
        />
        <Button label="Entrar" onPress={handleSignIn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
