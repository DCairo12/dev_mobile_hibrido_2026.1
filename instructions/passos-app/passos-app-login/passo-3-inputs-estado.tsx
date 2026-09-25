// =============================================================
// PASSO 3 — Usando o Input + conceito de ESTADO
// Arquivo: app/index.tsx
// =============================================================
// Agora que o componente Input existe (passo 2), vamos usá-lo e
// GUARDAR o que o usuário digita usando estado (useState).
//
// Conceitos novos:
// - Import do nosso componente: import { Input } from "@/components/Input".
// - placeholder: texto de dica que aparece quando o campo está vazio.
// - Estado (state): a "memória" do componente. Quando muda, a tela
//   se re-desenha (re-renderiza) sozinha.
// - useState('') cria essa memória começando vazia.
// - onChangeText: função que roda a cada tecla e nos entrega o texto.
//   (Ela existe no Input graças ao ...rest do passo 2.)
// =============================================================

import { Input } from "@/components/Input"
import { useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export default function Index() {
  // useState devolve um PAR: [valorAtual, funçãoQueAtualiza]
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        {/* Ao digitar, onChangeText chama setEmail e salva no estado.
            Ainda não usamos esses valores — faremos isso no passo 4. */}
        <Input placeholder="Email" onChangeText={setEmail} />
        <Input placeholder="Senha" onChangeText={setPassword} />
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
  form: {                        // NOVO: agrupa os campos
    width: '100%',
    marginTop: 24,
    gap: 12,                     // espaço entre um campo e outro
  },
})
