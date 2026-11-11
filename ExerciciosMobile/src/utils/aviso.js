import { Alert, Platform } from "react-native";

// Mostra uma mensagem para o usuário.
// No celular usa o Alert do React Native. No navegador (web) o Alert do
// React Native não faz nada, por isso usamos o window.alert.
export function mostrarAviso(titulo, mensagem) {
  if (Platform.OS === "web") {
    window.alert(mensagem);
  } else {
    Alert.alert(titulo, mensagem);
  }
}
