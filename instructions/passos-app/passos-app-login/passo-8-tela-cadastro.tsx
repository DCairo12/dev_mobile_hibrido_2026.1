// =============================================================
// PASSO 8 — Tela de Cadastro (arquivo: app/signup.tsx)
// =============================================================
// A tela de destino do link do passo 7. É a MESMA estrutura da tela de
// login — muda o conteúdo. Isso mostra como reaproveitamos os NOSSOS
// componentes (Input e Button) em outra tela, sem reescrever nada.
//
// IMPORTANTE: este arquivo precisa se chamar "signup.tsx" e ficar dentro
// de "app". É ele que responde ao href="./signup".
//
// DESAFIO para a turma: aplicar aqui o que aprendemos nos passos 3 a 5
// (um useState por campo, validação, e conferir se as duas senhas são
//  iguais antes de cadastrar).
// =============================================================

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"

// O que define a rota é o NOME DO ARQUIVO (signup.tsx), não o da função.
export default function SignUp() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('@/app/assets/images (3).png')}
          style={styles.illustration}
          resizeMode="contain"
        />
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Crie sua conta preenchendo os campos abaixo</Text>

        <View style={styles.form}>
          <Input placeholder="Nome" autoCapitalize="words" />
          <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirme a Senha" secureTextEntry />
          <Button label="Cadastrar" />
        </View>

        {/* Link de volta para a tela de login (rota "./"). */}
        <View>
          <Text style={styles.footer}>Já tem uma conta?{" "}
            <Link style={styles.link} href="./">Acesse aqui.</Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  footer: {
    textAlign: 'center',
    marginTop: 24,
    color: '#6B7280',
  },
  link: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
})
