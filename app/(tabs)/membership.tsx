import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MembershipScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f6f8" }}>
      <View
        style={{
          backgroundColor: "#0b2a3b",
          paddingTop: 50,
          paddingBottom: 30,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="arrow-left" size={20} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginLeft: 10,
              }}
            >
              Membership
            </Text>
          </View>
          <Feather name="settings" size={20} color="#fff" />
        </View>

        <Text style={{ color: "#cfd8dc", marginTop: 20 }}>Your the best,</Text>
        <Text style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>
          Kamu mau membership dan bayar, orang kaya...
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#ffb300",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Feather name="award" size={24} color="#fff" />
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "600" }}>Gold</Text>
              <Text style={{ color: "#ff9800", fontWeight: "600" }}>
                3021 Points
              </Text>
            </View>

            <Text style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
              Dapatkan 403 points lagi naik ke Platinum
            </Text>

            <View
              style={{
                height: 6,
                backgroundColor: "#eee",
                borderRadius: 6,
                marginTop: 8,
              }}
            >
              <View
                style={{
                  width: "70%",
                  height: 6,
                  backgroundColor: "#ff9800",
                  borderRadius: 6,
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            borderWidth: 1.5,
            borderColor: "#d3d3d3",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 13, color: "#d3d3d3" }}>
              Tukarkan points yang kamu dapat menjadi Uang
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 16,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "600", marginBottom: 12 }}>
            Cara tukar points
          </Text>

          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text>1</Text>
            </View>
            <Text style={{ flex: 1, color: "#777", fontSize: 13 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text>2</Text>
            </View>
            <Text style={{ flex: 1, color: "#777", fontSize: 13 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text>3</Text>
            </View>
            <Text style={{ flex: 1, color: "#777", fontSize: 13 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#0b2a3b",
            borderRadius: 14,
            padding: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>FAQ</Text>
          <Feather name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
