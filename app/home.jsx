import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Cloths from "./cloths";



export default function Home() {
  const router = useRouter();


  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View  className=" flex flex-row  pt-0 pl-0 pr-0 justify-between">
        <View className="flex flex-row">
          <TouchableOpacity
            className="mx-5"
            onPress={() => router.back()}
          >
            <AntDesign name="arrowleft" size={30} color="#000" />
          </TouchableOpacity>
          <Text className="text-[22px] font-semibold">Women</Text>
        </View>

        <View className="flex flex-row justify-evenly">
          <View className="mx-4">
            <AntDesign name="search1" size={25} color="#000"  />
          </View>
          <View className=" mx-4">
            <AntDesign name="hearto" size={25} color="#000" />
          </View>
          <View className=" mx-4 pr-3">
            <SimpleLineIcons name="handbag" size={25} color="#000" />
          </View>
        </View>
      </View>
      <View className='h-[0.1] p-[0.2] bg-black'></View>

      <View className="flex flex-row pt-0 mt-0 justify-between">
        <Text className="text-slate-400 text-sm ml-2">98/100 Products</Text>
        
        <View className="flex flex-row justify-evenly">
            <View className="flex flex-row mx-4">
                <MaterialCommunityIcons name="sort-descending" size={18}  color="#94a3b8" />
                <Text className="text-slate-400">Sort</Text>
            </View>
            <View className="flex flex-row mx-2">
                <Ionicons name="filter-outline" size={20} color="#94a3b8"/>
                <Text className="text-slate-400">Filter</Text>
            </View>       
        </View>
      </View>


      {/* cloths list  */}
      <View className="flex-1">
        <Cloths />
      </View>

    </SafeAreaView>
  );
}
