import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/techanjr.png")}
          style={{
            width: 1390,
            height: 50,
            resizeMode: "contain",
            marginBottom: 24,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontFamily: "PoppinsBold",
            textAlign: "center",
            lineHeight: 28,
          }}
        >
          Belajar Technology {"\n"} & Dapatkan Pengalamannya
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "PoppinsRegular",
            textAlign: "center",
            color: "#666",
            marginTop: 12,
            lineHeight: 22,
          }}
        >
          Belajar di Techxperience ini kamu dapat belajar berbagai bidang
          teknologi seperti pemrograman, desain grafis, dan jaringan.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#2EE6A6",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: 40,
            width: "100%",
          }}
          onPress={() => router.push("/(tabs)")}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "PoppinsSemiBold",
            }}
          >
            Mulai Belajar Sekarang
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={{
            backgroundColor: "#0A7CFF",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: 12,
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "PoppinsSemiBold",
              color: "#fff",
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 14,
            fontSize: 12,
            fontFamily: "PoppinsRegular",
            color: "#888",
          }}
        >
          #Dari 1 Baris Pertama, Sampai 1 Project Pertama
        </Text>
      </View>
    </SafeAreaView>
  );
}
