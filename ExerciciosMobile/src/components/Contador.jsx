import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Exercício 2 – Contador com monitoramento
export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador foi alterado!");
  }, [contador]); // roda sempre que "contador" mudar

  return (
    <View>
      <Text style={estilos.titulo}>Exercício 2 – Contador</Text>
      <View style={estilos.linha}>
        <Button title="Diminuir" onPress={() => setContador(contador - 1)} />
        <Text style={estilos.valor}>Valor: {contador}</Text>
        <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  linha: { flexDirection: "row", alignItems: "center" },
  valor: { marginHorizontal: 15, fontSize: 16 },
});
