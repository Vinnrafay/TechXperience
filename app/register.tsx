import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  // Validasi khusus @gmail.com sesuai kodemu
  const isError = email !== "" && !email.includes("@gmail.com");
  const canContinue = email !== "" && !isError;

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Kembali</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../assets/images/techanjr.png")}
          style={styles.logo}
          contentFit="contain"
        />

        <Text style={styles.title}>Masuk dengan Email</Text>

        {/* INPUT EMAIL */}
        <TextInput
          placeholder="Masukan Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, { borderColor: isError ? "red" : "#ddd" }]}
        />

        {/* WARNING */}
        {isError && (
          <Text style={styles.errorText}>
            Email harus menggunakan @gmail.com
          </Text>
        )}

        {/* BUTTON LANJUTKAN */}
        <TouchableOpacity
          disabled={!canContinue}
          style={[
            styles.buttonContinue,
            { backgroundColor: canContinue ? "#0A7CFF" : "#c2c2c2" },
          ]}
          onPress={() => router.push("/otp")}
        >
          <Text style={styles.buttonContinueText}>Lanjutkan</Text>
        </TouchableOpacity>

        <Text style={styles.dividerText}>Atau masuk dengan</Text>

        {/* Tombol Google */}
        <TouchableOpacity style={styles.socialButtonStyle}>
          <AntDesign name="google" size={20} color="#DB4437" />
          <Text style={styles.socialButtonText}>Masuk dengan Google</Text>
        </TouchableOpacity>

        {/* Tombol Facebook */}
        <TouchableOpacity style={styles.socialButtonStyle}>
          <FontAwesome name="facebook-square" size={20} color="#4267B2" />
          <Text style={styles.socialButtonText}>Masuk dengan Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontFamily: "PoppinsSemi",
    fontSize: 16,
    marginLeft: 12,
  },
  logo: {
    width: 260,
    height: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: "PoppinsSemi",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontFamily: "Poppins",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 4,
    fontFamily: "Poppins",
  },
  buttonContinue: {
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 24,
    marginTop: 20,
  },
  buttonContinueText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "PoppinsSemi",
  },
  dividerText: {
    textAlign: "center",
    color: "#aaa",
    marginBottom: 12,
    fontFamily: "Poppins",
  },
  socialButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  socialButtonText: {
    fontFamily: "Poppins",
    marginLeft: 10,
  },
});
