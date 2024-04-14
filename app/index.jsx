import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter();
    return (
        <View className="flex-1 flex justify-end">
          <StatusBar style="light" />
          <Image
            className="h-full w-full absolute"
            source={require("../assets/images/home.jpg")}
          />
    
          <View
            className="flex justify-end pb-12 space-y-8"
          >
            <View className="flex items-center">
              <Text
                style={{ fontSize: hp(6) }}
                className="text-white font-bold tracking-wide"
              >
                <Text className="text-rose-600">Krenai</Text>
              </Text>
              <Text
                style={{ fontSize: hp(5) }}
                className="font-bold tracking-wide"
              >
                Assignment
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => router.push("home")}
              style={{ height: hp(7), width: wp(80) }}
              className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 mb-8"
            >
              <Text
                style={{ fontSize: hp(3) }}
                className="text-white font-bold tracking-widest"
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
  