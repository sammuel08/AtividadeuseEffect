import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { mostrarAviso } from "../utils/aviso";

// Exercício 1 – Mensagem de boas-vindas
export default function BoasVindas() {
  useEffect(() => {
    // Pequeno atraso para a tela aparecer antes da mensagem
    const espera = setTimeout(() => {
      mostrarAviso("Boas-vindas", "Bem-vindo ao sistema!");
    }, 300);

    return () => clearTimeout(espera);
  }, []); // array vazio: roda só uma vez, quando o componente carrega
}

const estilos = StyleSheet.create({
  titulo: { fontSize: 20, fontWeight: "bold" },
});
