// =============================================================
// PASSO 4 — Botão "Entrar" + função de clique com validação
// Arquivo: app/index.tsx
// =============================================================
// Agora usamos os valores guardados no estado. Adicionamos o nosso
// Button (passo 2) que, ao ser tocado, verifica os campos.
//
// Conceitos novos:
// - Import do Button: import { Button } from "@/components/Button".
// - Função de evento (handleSignIn): junta a lógica do clique num lugar só.
// - Alert.alert: caixinha de aviso nativa do celular.
// - return dentro do if: PARA a função ali, sem rodar o resto.
// =============================================================

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { useState } from "react"
import { Alert, Image, StyleSheet, Text, View } from "react-native"

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    // Se email OU senha estiverem vazios, avisa e para (return).
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.')
      return
    }
    // Chegou aqui = tudo preenchido. As crases (`) permitem usar ${email}.
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
        <Input placeholder="Email" onChangeText={setEmail} />
        <Input placeholder="Senha" onChangeText={setPassword} />
        {/* Passamos a função SEM parênteses (handleSignIn, não handleSignIn()). */}
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
