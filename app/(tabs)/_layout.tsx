import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          height: 100,
          paddingBottom: 8,
          paddingTop: 6,
          borderTopWidth: 0.5,
          backgroundColor: theme.background,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "PoppinsSemi",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Reels",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "play-circle" : "play-circle-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="akademi"
        options={{
          title: "Akademi",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="membership"
        options={{
          title: "Membership",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen name="profile" options={{ href: null }} />
      <Tabs.Screen name="sertifikat" options={{ href: null }} />
    </Tabs>
  );
}
