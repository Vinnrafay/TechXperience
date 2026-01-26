import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
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
            paddingVertical: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/techanjr.png")}
            style={{ width: 150, height: 36 }}
            resizeMode="contain"
          />

          <View style={{ flexDirection: "row", gap: 16 }}>
            <Feather name="bell" size={22} />
            <Feather name="search" size={22} />
            <TouchableOpacity onPress={() => router.push("/profile")}>
              <Feather name="user" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        {/* BANNER */}
        <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
          <Image
            source={require("../../assets/images/image 1.png")}
            style={{
              width: "100%",
              height: 170,
              borderRadius: 16,
            }}
            resizeMode="cover"
          />
        </View>

        {/* QUICK MENU */}
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 28,
          }}
        >
          {[
            { title: "Modul Akademi", icon: "book-open" },
            { title: "Community", icon: "users" },
            { title: "Event Hackton", icon: "calendar" },
            { title: "Chat CS", icon: "message-circle" },
          ].map((item, i) => (
            <View
              key={i}
              style={{
                width: "48%",
                backgroundColor: "#F1F5F9",
                borderRadius: 14,
                padding: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                borderLeftWidth: 4,
                borderLeftColor: "#3B82F6",
              }}
            >
              <Feather name={item.icon as any} size={20} />
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 12.,
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>

        {/* BELAJAR */}
        <View style={{ paddingHorizontal: 16, marginBottom: 28 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontFamily: "PoppinsBold", fontSize: 16 }}>
              Mau belajar apa ni
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsRegular",
                fontSize: 13,
                color: "#9CA3AF",
              }}
            >
              Lihat semua
            </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {["Design", "MySQL", "Jaringan", "Frontend"].map((item, i) => (
              <View
                key={i}
                style={{
                  width: "48%",
                  backgroundColor: "#F9FAFB",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("../../assets/images/2023-blogpost-frontend-solution 1.png")}
                  style={{ width: "100%", height: 90 }}
                  resizeMode="cover"
                />
                <View style={{ padding: 10 }}>
                  <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 14 }}>
                    Dasar Belajar {item}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "PoppinsRegular",
                      fontSize: 12,
                      color: "#6B7280",
                    }}
                  >
                    Mulai belajar
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* EVENT */}
        <View style={{ paddingLeft: 16, marginBottom: 28 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 16,
              marginBottom: 5,
            }}
          >
            <Text style={{ fontFamily: "PoppinsBold", fontSize: 16 }}>
              Ikuti Event Terdekat
            </Text>

            <Text
              style={{
                fontFamily: "PoppinsRegular",
                fontSize: 13,
                color: "#9CA3AF",
              }}
            >
              Lihat semua
            </Text>
          </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12, flexDirection: "row", gap: 6 }}>
              <View style={{ backgroundColor: "#F2F4F7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, borderColor: "#dedede", borderWidth: 1.5, marginRight: 6 }}>
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 12 }}>Hackathon</Text>
              </View>
                 <View style={{ backgroundColor: "#F2F4F7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, borderColor: "#dedede", borderWidth: 1.5, marginRight: 6 }}>
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 12 }}>Design Web</Text>
              </View>
                 <View style={{ backgroundColor: "#F2F4F7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, borderColor: "#dedede", borderWidth: 1.5, marginRight: 6 }}>
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 12 }}>Workshop</Text>
              </View>
                 <View style={{ backgroundColor: "#F2F4F7", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, borderColor: "#dedede", borderWidth: 1.5 }}>
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 12 }}>Lomba</Text>
              </View>
            </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((_, i) => (
              <View
                key={i}
                style={{
                  width: 260,
                  backgroundColor: "#F9FAFB",
                  borderRadius: 16,
                  overflow: "hidden",
                  marginRight: 12,
                }}
              >
                <Image
                  source={require("../../assets/images/Rectangle 150.png")}
                  style={{ width: "100%", height: 140 }}
                  resizeMode="cover"
                />
                <View style={{ padding: 12 }}>
                  <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 14 }}>
                    Hackathon & Workshop
                  </Text>
                  <Text
                    style={{
                      fontFamily: "PoppinsRegular",
                      fontSize: 12,
                      color: "#6B7280",
                    }}
                  >
                    Klik untuk detail event
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* PROGRAM */}
        <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Program Techxperience
          </Text>

          <View style={{ flexDirection: "row", gap: 12 }}>
            {[
              { title: "Career", icon: "briefcase" },
              { title: "Usaha", icon: "store" },
              { title: "Beasiswa", icon: "graduation-cap" },
              { title: "Roadmap", icon: "map" },
            ].map((item, i) => (
              <View
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: "#F2F4F7",
                  paddingVertical: 14,
                  borderRadius: 14,
                  alignItems: "center",
                    borderLeftWidth: 4,
                borderLeftColor: "#3B82F6",
                }}
              >
                <FontAwesome5 name={item.icon as any} size={20} />
                <Text
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    fontFamily: "PoppinsRegular",
                    
                  }}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
