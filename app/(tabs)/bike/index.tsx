import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView, Pressable } from "react-native";
import SaveViewAndroid from "@/components/style/SaveViewAndroid";
import Header from "@/components/Header";
import SearchBar from "@/components/style/SearchBarStyle";
import SearchBars from "@/components/SearchBar";
import Styles from "@/components/style/BikeGlobal";
import PickerBike from "@/components/PickerBike";
import CardCatalog from "@/components/CardCatalog";

export default function Bike() {
  return (
    <SafeAreaView style={SaveViewAndroid.AndroidSafeArea}>
      <Header title="Catalog" leftIcon="navicon" rightIcon="log-out" />
      <View style={Styles.container}>
        <SearchBars />
        <Text style={Styles.heading}>Type</Text>
        <PickerBike />
        <ScrollView style={Styles.scroll}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView>
        <Pressable
        style={Styles.button}>
            <Text style={Styles.btnText}>Rent Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
