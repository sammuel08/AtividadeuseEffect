import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import BoasVindas from "./src/components/BoasVindas";
import Contador from "./src/components/Contador";
import AlterarTitulo from "./src/components/AlterarTitulo";

export default function App() {
  return (
    <View style={estilos.tela}>
      <ScrollView contentContainerStyle={estilos.conteudo}>
        <BoasVindas />
        <View style={estilos.divisor} />
        <Contador />
        <View style={estilos.divisor} />
        <AlterarTitulo />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#fff" },
  conteudo: { padding: 20, paddingTop: 60 },
  divisor: { height: 1, backgroundColor: "#ddd", marginVertical: 20 },
});
