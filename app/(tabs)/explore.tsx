import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function ReelsScreen() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const tambahLike = () => {
    setLiked(true);
    setCount((prev) => prev + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/image 1.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
            marginLeft: 25,
            backgroundColor: "rgba(83,83,83,0.3)",
            padding: 8,
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

        {/* Right Action */}
        <View
          style={{
            position: "absolute",
            right: 16,
            bottom: 160,
            alignItems: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={tambahLike} style={{ alignItems: "center" }}>
            <AntDesign
              name="heart"
              size={32}
              color={liked ? "#ff0000" : "#ffffff"}
            />
            <Text style={{ color: "#fff", fontSize: 12 }}>
              {count}
            </Text>
          </TouchableOpacity>

          <Feather name="message-circle" size={24} color="#fff" />
          <Feather name="send" size={24} color="#fff" />
          <Feather name="bookmark" size={24} color="#fff" />
        </View>

        {/* Caption */}
        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 16,
            right: 16,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>
            yeawoooooooooooooooooooooooooooooo
          </Text>
          <Text style={{ color: "#ddd", fontSize: 13 }}>
            hikmah
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
