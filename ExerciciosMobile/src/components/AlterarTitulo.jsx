import { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

// Exercício 3 – Alterando o título
export default function AlterarTitulo() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    // document.title só existe no navegador (web). No celular não há aba,
    // então o título aparece como texto na própria tela (veja abaixo).
    if (Platform.OS === "web") {
      document.title = `Olá, ${nome || "visitante"}!`;
    }
  }, [nome]); // roda sempre que "nome" mudar

  return (
    <View>
      <Text style={estilos.titulo}>Exercício 3 – Alterando o título</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={estilos.saudacao}>Olá, {nome || "visitante"}!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  campo: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  saudacao: { marginTop: 12, fontSize: 18 },
});
