import { Image } from "expo-image";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";


export default function Login() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
              <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: 16,
              marginLeft: 12,
            }}
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

        <Text style={{ fontFamily: "PoppinsSemi", fontSize: 20, textAlign: "center", marginBottom: 8 }}>
          Masuk dengan Email
        </Text>

        <TextInput
          placeholder="Masukan Email"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 14,
            marginBottom: 16,
            fontFamily: "Poppins",
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#0A7CFF",
            paddingVertical: 14,
            borderRadius: 12,
            marginBottom: 24,
          }}
          onPress={() => router.push("/otp")}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontFamily: "PoppinsSemi" }}>
            Lanjutkan
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", color: "#aaa", marginBottom: 12, fontFamily: "Poppins" }}>
          Atau masuk dengan
        </Text>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            paddingVertical: 12,
            borderRadius: 12,
            marginBottom: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontFamily: "Poppins" }}>
            Masuk dengan Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            paddingVertical: 12,
            borderRadius: 12,
          }}
        >
          <Text style={{ textAlign: "center", fontFamily: "Poppins" }}>
            Masuk dengan Facebook
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
