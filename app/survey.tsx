import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Survey() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  const options = [
    "Co-Founders",
    "Instagram",
    "Tiktok",
    "Youtube",
    "Website",
    "Lainnya",
  ];

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
      <View style={{ flex: 1 }}>
        
        <Text style={{ fontFamily: "PoppinsSemi", fontSize: 20, marginBottom: 6 }}>
          Bagaimana kamu tahu tentang Techxperience?
        </Text>

        <Text style={{ fontFamily: "Poppins", color: "#777", marginBottom: 20 }}>
          Pilih salah satu sumber informasi
        </Text>

        {options.map((item, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#F2F2F2",
              padding: 14,
              borderRadius: 12,
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Poppins" }}>{item}</Text>

            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#999",
              }}
            />
          </View>
        ))}

        <View
          style={{
            backgroundColor: "#0A7CFF",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: "auto",
          }}
        >
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "PoppinsSemi",
            }}
          >
            Selesai
          </Text>
        </TouchableOpacity>
        </View>
            
      </View>
    </SafeAreaView>
  );
}
