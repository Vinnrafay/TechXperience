import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CourseDetailScreen() {
  const router = useRouter();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        paddingTop: 52,
      }}
    >
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
      {/* Video Preview */}
      <View
        style={{
          height: 180,
          backgroundColor: "#e0e0e0",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Feather name="play" size={40} color="#000" />
      </View>

      {/* Title */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        Introduction of Financial Statement
      </Text>

      {/* Description */}
      <Text
        style={{
          fontSize: 14,
          color: "#555",
          marginBottom: 12,
        }}
      >
        Bergabung dengan kelas mahir menjadi frontend dev, maka kamu akan
        mendapatkan fundamental menjadi seorang programmer.
      </Text>

      {/* Info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Feather name="star" size={14} color="#f5a623" />
        <Text style={{ fontSize: 13, marginLeft: 4, marginRight: 8 }}>
          4.5 (823)
        </Text>

        <Feather name="layers" size={14} color="#777" />
        <Text style={{ fontSize: 13, marginLeft: 4, marginRight: 8 }}>
          4 Module
        </Text>

        <Feather name="user" size={14} color="#777" />
        <Text style={{ fontSize: 13, marginLeft: 4 }}>Programmer</Text>
      </View>

      {/* Module Card */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 14,
          borderWidth: 1,
          borderColor: "#eee",
          marginBottom: 20,
        }}
      >
        {/* Card Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Module 1</Text>
          <Feather name="check-circle" size={20} color="green" />
        </View>

        {/* Lesson 1 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Feather name="play-circle" size={20} color="#555" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14 }}>
              Lesson 1 - Identifying the Need
            </Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Video</Text>
          </View>
        </View>

        {/* Lesson 2 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Feather name="play-circle" size={20} color="#555" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14 }}>
              Lesson 2 - Business Model Canvas
            </Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Video</Text>
          </View>
        </View>

        {/* Lesson 3 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Feather name="file-text" size={20} color="#555" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14 }}>Lesson 3</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Attachment</Text>
          </View>
        </View>

        {/* Lesson 4 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="help-circle" size={20} color="#555" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14 }}>Lesson 4</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Quiz</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#0b2a3b",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 14,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginRight: 8,
          }}
        >
          Ikuti Kelas
        </Text>
        <Feather name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}
