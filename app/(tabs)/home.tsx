import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex flex-col  items-center">
      <Text className="bg-green-500 text-center text-white font-medium text-lg w-full h-[20vh]">
        Home
      </Text>

      <Link
        href={{
          pathname: "/auth/register",
        }}
      >
        Go to Register
      </Link>
      <Link
        href={{
          pathname: "/auth/login",
        }}
      >
        Go to Login
      </Link>
    </View>
  );
};

export default Home;
