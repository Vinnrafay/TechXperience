import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Sertifikat() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const router = useRouter();
  if (!fontsLoaded) return null;

  const data = [
    { title: "Dasar Jaringan", color: "#4F7CFE", status: "done" },
    { title: "Master Jaringan", color: "#BDBDBD", status: "lock" },
    { title: "Dasar MySql", color: "#2ECC71", status: "done" },
    { title: "Dasar Frontend", color: "#EB5757", status: "done" },
    { title: "Master MySql", color: "#BDBDBD", status: "lock" },
    { title: "Dasar Design", color: "#BDBDBD", status: "lock" },
    { title: "Master Jaringan", color: "#F2994A", status: "done" },
    { title: "Master AI", color: "#6EE7B7", status: "done" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>

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
              fontFamily: "PoppinsSemiBold",
              fontSize: 16,
              marginLeft: 12,
            }}
          >
            Sertifikat
          </Text>
        </View>

        {/* Grid Sertifikat */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.map((item, i) => (
            <View
              key={i}
              style={{
                width: "48%",
                backgroundColor: "#fff",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingVertical: 20,
                paddingHorizontal: 12,
                marginBottom: 14,
                alignItems: "center",
              }}
            >
              {/* Badge */}
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  borderWidth: 6,
                  borderColor: item.color,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 10,
                    backgroundColor: item.color,
                    position: "absolute",
                    top: -18,
                    left: 10,
                    borderRadius: 2,
                  }}
                />
                <View
                  style={{
                    width: 20,
                    height: 10,
                    backgroundColor: item.color,
                    position: "absolute",
                    top: -18,
                    right: 10,
                    borderRadius: 2,
                  }}
                />

                {item.status === "lock" ? (
                  <Feather name="lock" size={20} color="#999" />
                ) : (
                  <Feather name="award" size={22} color={item.color} />
                )}
              </View>

              {/* Check */}
              {item.status === "done" && (
                <View
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "#22C55E",
                    borderRadius: 10,
                    padding: 2,
                  }}
                >
                  <Feather name="check" size={12} color="#fff" />
                </View>
              )}

              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 13,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
