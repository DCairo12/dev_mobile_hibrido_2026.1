import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router';

import Input from '../components/input';
import Button from '../components/button';

export default function Login() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSignIn() {
    if (!email || !password) {
      Alert.alert('Erro de Validação', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', `Bem-vindo ao MiauCare!\nLogin feito com: ${email}`);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo-login.png')}
            style={styles.logoImage}
            resizeMode="contain"/>
          <Text style={styles.title}>MiauCare</Text>
          <Text style={styles.subtitle}>O app de cuidados dos seus felinos</Text>
        </View>

        <View style={styles.form}>
          {}
          <Input 
            placeholder="Digite seu E-mail" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input 
            placeholder="Sua senha" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button label="Entrar" onPress={handleSignIn} />

          {}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Ainda não tem conta? </Text>
            <Link href="/signup" style={styles.link}>
              Cadastre-se aqui.
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
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
