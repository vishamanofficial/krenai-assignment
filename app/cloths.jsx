import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Cloths() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100"
      )
      .then((res) => {
        setProducts(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="w-[50%]">
            <View
              className="flex justify-end p-2 mb-2"
              style={{ position: "relative" }}
            >
              <AntDesign
                name="hearto"
                size={25}
                style={{ zIndex: 1, position: "absolute", top: 15, right: 15 }}
              />
              <Image
                source={{ uri: item.mediaUrl }}
                style={{ width:'100%', height:220, borderRadius: 5 }}
              />
            </View>

            <View className="flex justify-end pl-2 mb-2">
              <Text className="text-[15px] font-bold pb-1" >12 STOREEZ</Text>
              <Text className="text-[15px] font-normal pb-1">{item.name}</Text>
              <Text className="text-[15px] font-light">₹{item.variants[0].mrp}</Text>
            </View>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}
