import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";

export default function Confirm() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
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
            fontFamily: "PoppinsSemi",
            fontSize: 16,
            marginLeft: 12,
          }}
        >
          Kembali
        </Text>
      </View>

      {/* Content */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "PoppinsSemi",
            marginBottom: 6,
          }}
        >
          Cek email kamu!
        </Text>

        <Text
          style={{
            color: "#777",
            fontFamily: "Poppins",
            marginBottom: 30,
          }}
        >
          Masukkan kode verifikasi yang dikirim ke email kamu
        </Text>

        {/* OTP */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <View
              key={i}
              style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F9FAFB",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "#aaa",
                  fontFamily: "PoppinsSemi",
                }}
              >
                -
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#0A7CFF",
            paddingVertical: 14,
            borderRadius: 12,
          }}
          onPress={() => router.push("/survey")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "PoppinsSemi",
            }}
          >
            Lanjut
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            marginTop: 16,
            fontFamily: "Poppins",
            color: "#888",
          }}
        >
          Tidak menerima kode? Kirim ulang
        </Text>
      </View>
    </SafeAreaView>
  );
}
