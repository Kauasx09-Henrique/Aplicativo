import React from "react";
import { ScrollView, StyleSheet, View, Image, Text as RNText } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; 

export default function HomeScreen() {
  const navigation = useNavigation(); 

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <RNText style={styles.headerText}>Cardápio</RNText>
          <Ionicons name="fast-food" size={24} color="#E53935" style={styles.icon} />
        </View>

        {cardData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <RNText style={styles.title}>{item.title}</RNText>
            <RNText style={styles.text}>{item.description}</RNText>
          </View>
        ))}

        {/* Botão estiloso para navegar */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate("CadastroScreen")}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Ir para Detalhes
        </Button>
      </View>
    </ScrollView>
  );
}

const cardData = [
  {
    title: "Pizzas",
    description: "Experimente nossas pizzas artesanais com massa fina, molho caseiro e recheios generosos.",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
  {
    title: "Hambúrguer",
    description: "Hambúrgueres suculentos, pão artesanal e combinações incríveis.",
    image: "https://cdn.pixabay.com/photo/2019/04/04/15/30/hamburger-4103070_1280.jpg",
  },
  {
    title: "Batatas",
    description: "Nossas batatas são crocantes, douradas e servidas com molhos especiais.",
    image: "https://cdn.pixabay.com/photo/2019/04/01/11/28/fries-4095151_640.jpg",
  },
  {
    title: "Sucos e Cremes",
    description: "Refresque seu dia com sucos 100% naturais e cremes irresistíveis.",
    image: "https://images.pexels.com/photos/7377093/pexels-photo-7377093.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#FFF3E0",
  },
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E53935",
    textAlign: "center",
    marginRight: 8,
  },
  icon: {
    marginLeft: 8,
  },
  card: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#E53935",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
