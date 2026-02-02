import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Akademi() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} />
          </TouchableOpacity>

          <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 18 }}>
            Akademi
          </Text>

          <Feather name="bell" size={20} />
        </View>

        {/* LIST */}
        <View style={{ paddingHorizontal: 16 }}>
          {/* ITEM 1 */}
          <TouchableOpacity
            style={{ flexDirection: "row", marginBottom: 20 }}
            onPress={() => router.push("/detail")}
          >
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 16,
                backgroundColor: "#E5E7EB",
                justifyContent: "flex-end",
                padding: 8,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-end",
                  backgroundColor: "#FCA5A5",
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: "PoppinsSemiBold" }}>
                  Free
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#9CA3AF",
                  fontFamily: "PoppinsRegular",
                }}
              >
                Keuangan bisnis
              </Text>

              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  marginVertical: 4,
                }}
              >
                Introduction of Financial Statement
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  color: "#6B7280",
                  fontFamily: "PoppinsRegular",
                }}
              >
                4 Module
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Feather name="star" size={12} color="#F59E0B" />
                <Text
                  style={{
                    fontSize: 11,
                    marginLeft: 4,
                    fontFamily: "PoppinsRegular",
                  }}
                >
                  4.5 (1000)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ITEM 2 */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 16,
                backgroundColor: "#E5E7EB",
                justifyContent: "flex-end",
                padding: 8,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-end",
                  backgroundColor: "#FCD34D",
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: "PoppinsSemiBold" }}>
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#9CA3AF",
                  fontFamily: "PoppinsRegular",
                }}
              >
                Investasi Usaha
              </Text>

              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  marginVertical: 4,
                }}
              >
                Introduction of Venture Capital
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  color: "#6B7280",
                  fontFamily: "PoppinsRegular",
                }}
              >
                4 Module
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Feather name="star" size={12} color="#F59E0B" />
                <Text
                  style={{
                    fontSize: 11,
                    marginLeft: 4,
                    fontFamily: "PoppinsRegular",
                  }}
                >
                  4.5 (823)
                </Text>
              </View>
            </View>
          </View>

          {/* ITEM 3 */}
          <View style={{ flexDirection: "row", marginBottom: 32 }}>
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 16,
                backgroundColor: "#E5E7EB",
                justifyContent: "flex-end",
                padding: 8,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-end",
                  backgroundColor: "#FCD34D",
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: "PoppinsSemiBold" }}>
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#9CA3AF",
                  fontFamily: "PoppinsRegular",
                }}
              >
                Branding
              </Text>

              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  marginVertical: 4,
                }}
              >
                Importance of Branding
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  color: "#6B7280",
                  fontFamily: "PoppinsRegular",
                }}
              >
                5 Module
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Feather name="star" size={12} color="#F59E0B" />
                <Text
                  style={{
                    fontSize: 11,
                    marginLeft: 4,
                    fontFamily: "PoppinsRegular",
                  }}
                >
                  4.5 (26783)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
