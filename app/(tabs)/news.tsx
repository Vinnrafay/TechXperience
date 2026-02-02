import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function News() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const [topNews, setTopNews] = useState([
    {
      title: "Arsenal meriamnya diganti",
      author: "Reporter Mas",
      likeCount: 0,
      liked: false,
      image: require("../../assets/images/25277-scaled 1 (1).png"),
    },
    {
      title: "Ryzen comeback, join AE",
      author: "Reporter Mas",
      likeCount: 0,
      liked: false,
      image: require("../../assets/images/25277-scaled 2.png"),
    },
  ]);

  const [trending, setTrending] = useState([
    {
      category: "Sports",
      title: "Matahari terunin aja, biar king MU yang bersinar",
      date: "26 Januari 2026",
      likeCount: 0,
      liked: false,
      image: require("../../assets/images/Rectangle 248.png"),
    },
    {
      category: "Politics",
      title: "Hal paling memalukan di dunia di bobol Christiano Dorgu",
      date: "25 Januari 2026",
      likeCount: 0,
      liked: false,
      image: require("../../assets/images/25277-scaled 1 (1).png"),
    },
    {
      category: "Entertainment",
      title: "Sudah waktunya king MU tampil",
      date: "24 Januari 2026",
      likeCount: 0,
      liked: false,
      image: require("../../assets/images/Rectangle 254.png"),
    },
  ]);

  const toggleTopNewsLike = (index: number) => {
    const data = [...topNews];
    data[index].liked = !data[index].liked;
    data[index].likeCount = data[index].liked ? 1 : 0;
    setTopNews(data);
  };

  const toggleTrendingLike = (index: number) => {
    const data = [...trending];
    data[index].liked = !data[index].liked;
    data[index].likeCount = data[index].liked ? 1 : 0;
    setTrending(data);
  };

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "PoppinsSemiBold" }}>
            News
          </Text>
          <Feather name="settings" size={20} color="#3B82F6" />
        </View>

        <View style={{ paddingHorizontal: 16, marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F3F4F6",
              borderRadius: 12,
              paddingHorizontal: 12,
              height: 44,
            }}
          >
            <Feather name="search" size={18} color="#3B82F6" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              style={{
                flex: 1,
                marginLeft: 8,
                fontFamily: "PoppinsRegular",
                fontSize: 14,
              }}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 16, marginBottom: 24 }}
        >
          {topNews.map((item, i) => (
            <View
              key={i}
              style={{
                width: 220,
                marginRight: 12,
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                elevation: 2,
              }}
            >
              <Image
                source={item.image}
                style={{ width: "100%", height: 120 }}
                resizeMode="cover"
              />

              <View style={{ padding: 10 }}>
                <Text
                  style={{ fontFamily: "PoppinsSemiBold", fontSize: 13 }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#6B7280",
                      fontFamily: "PoppinsRegular",
                    }}
                  >
                    {item.author}
                  </Text>

                  <TouchableOpacity
                    onPress={() => toggleTopNewsLike(i)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Ionicons
                      name={item.liked ? "heart" : "heart-outline"}
                      size={14}
                      color={item.liked ? "#EF4444" : "#9CA3AF"}
                    />
                    <Text
                      style={{
                        marginLeft: 4,
                        fontSize: 11,
                        fontFamily: "PoppinsRegular",
                      }}
                    >
                      {item.likeCount}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ paddingHorizontal: 16 }}>
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Trending News
          </Text>

          {trending.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", marginBottom: 16 }}>
              <Image
                source={item.image}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  marginRight: 12,
                }}
              />

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9CA3AF",
                    fontFamily: "PoppinsRegular",
                  }}
                >
                  {item.category}
                </Text>

                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 14,
                    marginVertical: 4,
                  }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#9CA3AF",
                      fontFamily: "PoppinsRegular",
                    }}
                  >
                    {item.date}
                  </Text>

                  <TouchableOpacity
                    onPress={() => toggleTrendingLike(i)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Ionicons
                      name={item.liked ? "heart" : "heart-outline"}
                      size={14}
                      color={item.liked ? "#EF4444" : "#9CA3AF"}
                    />
                    <Text
                      style={{
                        marginLeft: 4,
                        fontSize: 11,
                        fontFamily: "PoppinsRegular",
                      }}
                    >
                      {item.likeCount}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
