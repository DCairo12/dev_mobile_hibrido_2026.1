import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Link } from 'expo-router';

import Input from '../components/input';
import Button from '../components/button';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSignUp() {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos para cadastrar o seu gatinho.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro de Senha', 'As senhas informadas não são iguais. Tente novamente.');
      return;
    }

    Alert.alert(
      'Sucesso!', 
      `Cadastro realizado, ${name}!\nAgora você e seus gatinhos fazem parte do MiauCare.`
    );
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {}
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/images/logo-cadastro.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>MiauCare</Text>
          <Text style={styles.subtitle}>O app de cuidados dos seus felinos</Text>
        </View>

        <View style={styles.form}>
          <Input 
            placeholder="Nome completo do tutor" 
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <Input 
            placeholder="E-mail" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input 
            placeholder="Escolha uma senha" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Input 
            placeholder="Confirme a sua senha" 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Button label="Cadastrar" onPress={handleSignUp} />

          {}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <Link href="/" style={styles.link}>
              Faça o login aqui.
            </Link>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 10,
  },
  form: {
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#666',
    fontSize: 15,
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
