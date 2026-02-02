import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function ReelsScreen() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const tambahLike = () => {
    if (liked) {
      setLiked(false);
      setCount(0);
    } else {
      setLiked(true);
      setCount(1);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ImageBackground
        source={require("../../assets/images/image 1.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 25,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(83,83,83,0.3)",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#fff",
            width: 300,
          }}
        >
          <Feather name="search" size={16} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 14, marginLeft: 8 }}>
            For Your Page
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            right: 16,
            bottom: 160,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={tambahLike}
            style={{ alignItems: "center", marginBottom: 20 }}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={32}
              color={liked ? "#ff0000" : "#ffffff"}
            />
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 4 }}>
              {count}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 20 }}>
            <Feather name="message-circle" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 20 }}>
            <Feather name="send" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="bookmark" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 16,
            right: 16,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, marginBottom: 4 }}>
            Kamu akan mendapatkan:
          </Text>
          <Text style={{ color: "#ddd", fontSize: 13 }}>
            Mendapatkan sertifikat dan keuntungan lainnya
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
