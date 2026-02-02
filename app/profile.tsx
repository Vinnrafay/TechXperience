import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 20 }}
    >
      <StatusBar style="dark" />

      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "PoppinsSemiBold",
            marginLeft: 12,
          }}
        >
          Profil
        </Text>
      </View>

      {/* USER INFO */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            backgroundColor: "#1F2937",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "PoppinsSemiBold",
            }}
          >
            M
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontFamily: "PoppinsSemiBold" }}>
            Maroon
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              fontFamily: "PoppinsRegular",
            }}
          >
            Graphic Design
          </Text>
        </View>
      </View>

      {/* STATS */}
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#3B82F6",
          borderRadius: 14,
          paddingVertical: 16,
          marginBottom: 16,
        }}
      >
        {[
          { value: "10", label: "Jumlah Modul", icon: "book" },
          { value: "7", label: "Ikut Event", icon: "calendar" },
          { value: "367", label: "Total Sertifikat", icon: "shield" },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              alignItems: "center",
              borderRightWidth: index !== 2 ? 1 : 0,
              borderColor: "#E5E7EB",
            }}
          >
            <Feather name={item.icon as any} size={18} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "PoppinsSemiBold",
                marginTop: 4,
              }}
            >
              {item.value}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#6B7280",
                fontFamily: "PoppinsRegular",
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* MORA AI */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F9FAFB",
          padding: 14,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 14, fontFamily: "PoppinsSemiBold" }}>
          Mora AI
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#3B82F6",
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontFamily: "PoppinsSemiBold",
            }}
          >
            Chat Mora AI
          </Text>
        </TouchableOpacity>
      </View>

      {/* MENU */}
      <View style={{ flex: 1, marginBottom: 5 }}>
        {[
          { label: "Profil", icon: "user" },
          { label: "Notifikasi", icon: "bell" },
          { label: "Riwayat aktivitas", icon: "clock" },
          { label: "Kebijakan privasi", icon: "file-text" },
          { label: "Bantuan", icon: "help-circle" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E7EB",
            }}
          >
            <Feather
              name={item.icon as any}
              size={18}
              style={{ color: "#3B82F6" }}
            />
            <Text
              style={{
                marginLeft: 12,
                fontSize: 14,
                fontFamily: "PoppinsRegular",
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        {/* LOGOUT */}
        <TouchableOpacity
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#EF4444",
            paddingVertical: 14,
            borderRadius: 14,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
          onPress={() => router.push("/welcome")}
        >
          <Feather name="log-out" size={18} color="#EF4444" />
          <Text style={{ color: "#EF4444", fontFamily: "PoppinsSemiBold" }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
