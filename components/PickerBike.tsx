import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";

export default function PickerBike() {
  const [selectedValue, setSelectedValue] = useState("java"); // Default value
  const [modalVisible, setModalVisible] = useState(false); // For modal visibility
  const [tempValue, setTempValue] = useState(selectedValue); // Temporary value for selection
  const [open, setOpen] = useState(false); // For DropDownPicker state

  // Static items for both iOS and Android
  const items = [
    { label: "City E-Bike", value: "City E-Bike" },
    { label: "Mountain E-Bike", value: "Mountain E-Bike" },
    { label: "Folding E-Bike", value: "Folding E-Bike" },
    { label: "Heavy-Duty E-Scooter", value: "Heavy-Duty E-Scooter" },
    { label: "Kid-Friendly E-Scooter", value: "Kid-Friendly E-Scooter" },
    { label: "Commuter E-Scooter", value: "Commuter E-Scooter" },
    { label: "Bogey", value: "Bogey" },
  ];

  const handleDone = () => {
    setSelectedValue(tempValue); // Update the selected value
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      {/* iOS Modal Picker */}
      {Platform.OS === "ios" ? (
        <TouchableOpacity
          style={styles.PickerButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.selectedText}>
            {selectedValue || "Select Technology"}
          </Text>
        </TouchableOpacity>
      ) : (
        // Android DropDownPicker
        <View style={styles.androidPickerContainer}>
          <DropDownPicker
            style={styles.PickerDropDown}
            open={open}
            value={selectedValue}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedValue}
            placeholder="All, E-bike, E-scooter"
            placeholderStyle={styles.placeholderStyle}
          />
        </View>
      )}

      {/* Modal for iOS Picker */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tempValue}
              style={styles.picker}
              onValueChange={(itemValue) => setTempValue(itemValue)}
            >
              {items.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  PickerButton: {
    height: 48,
    width: 358,
    backgroundColor: "#EBEDED",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  selectedText: {
    fontSize: 16,
    color: "#193238",
  },
  androidPickerContainer: {
    width: 358,
  },
  PickerDropDown: {
    height: 48,
    backgroundColor: "#EBEDED",
    borderWidth: 0,
    width: 358,
  },
  placeholderStyle: {
    color: "#193238",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  pickerContainer: {
    backgroundColor: "white",
    paddingTop: 6,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 358,
    alignSelf: "center", // Center the modal content
    height: "30%", // Set the height to less than half of the screen
  },
  picker: {
    height: 150,
    width: 358,
  },
  doneButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 6,
    alignItems: "center",
  },
  doneButtonText: {
    color: "white",
    fontSize: 16,
  },
});
