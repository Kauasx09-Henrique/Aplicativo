import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvarCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const novoUsuario = { nome, email, senha };

    try {
      const usuariosSalvos = await AsyncStorage.getItem("usuarios");
      const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

      usuarios.push(novoUsuario);
      await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));

      Alert.alert("Sucesso", "Cadastro realizado!");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao salvar", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons
        name="person-circle"
        size={100}
        color="black"
        style={styles.icon}
      />

      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#999"
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={salvarCadastro}
        style={styles.button}
        labelStyle={{ color: "#fff", fontSize: 16 }}
      >
        Cadastrar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 24,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 14,
    borderRadius: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 8,
    marginTop: 12,
  },
});
