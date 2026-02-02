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

  // State untuk input
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Logika Validasi
  const isEmailValid = email.includes("@") && email.includes(".");
  const canLogin =
    email.trim() !== "" && password.trim() !== "" && isEmailValid;

  const handleLogin = () => {
    if (canLogin) {
      console.log("Login Berhasil:", email);
      router.push("/(tabs)");
    }
  };

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header Kembali */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "PoppinsSemi", fontSize: 16, marginLeft: 12 }}
        >
          Kembali
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../assets/images/techanjr.png")}
          style={{
            width: 260,
            height: 60,
            alignSelf: "center",
            marginBottom: 30,
          }}
          contentFit="contain"
        />

        <Text
          style={{
            fontFamily: "PoppinsSemi",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Selamat Datang Kembali
        </Text>

        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 13,
            textAlign: "center",
            color: "#777",
            marginBottom: 30,
          }}
        >
          Masuk untuk lanjut belajar di Techxperience
        </Text>

        {/* Input Email */}
        <TextInput
          placeholder="Masukan Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderColor: email.length > 0 && !isEmailValid ? "red" : "#ddd",
            borderRadius: 12,
            padding: 14,
            fontFamily: "Poppins",
          }}
        />

        {/* Teks Error Email */}
        {email.length > 0 && !isEmailValid && (
          <Text
            style={{
              color: "red",
              fontSize: 11,
              marginTop: 4,
              marginLeft: 4,
              fontFamily: "Poppins",
            }}
          >
            Email harus mengandung '@' dan '.'
          </Text>
        )}

        {/* Input Password */}
        <TextInput
          placeholder="Masukan Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 14,
            marginTop: 15,
            marginBottom: 10,
            fontFamily: "Poppins",
          }}
        />

        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 24 }}>
          <Text style={{ color: "#0A7CFF", fontFamily: "Poppins" }}>
            Lupa Password?
          </Text>
        </TouchableOpacity>

        {/* Tombol Masuk */}
        <TouchableOpacity
          style={{
            backgroundColor: canLogin ? "#0A7CFF" : "#D1D1D1",
            paddingVertical: 14,
            borderRadius: 12,
            marginBottom: 20,
            opacity: canLogin ? 1 : 0.6,
          }}
          onPress={handleLogin}
          disabled={!canLogin}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "PoppinsSemi",
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
            Belum punya akun?
          </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={{ color: "#0A7CFF", fontFamily: "PoppinsSemi" }}>
              Daftar dulu!
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: 12,
            fontFamily: "Poppins",
          }}
        >
          Atau mau masuk melalui?
        </Text>

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

// Styling menggunakan StyleSheet agar rapi dan tidak error
const styles = StyleSheet.create({
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
