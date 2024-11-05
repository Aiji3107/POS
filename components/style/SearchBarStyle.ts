import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Mengatur konten mulai dari kiri
        borderRadius: 8,
        backgroundColor: '#EBEDED',
        width: 358,
        height: 36,
        paddingHorizontal: 10, // Padding di kiri dan kanan
    },
    input: {
        flex: 1, // Mengisi ruang yang tersisa
        height: 36,
        borderRadius: 8,
        backgroundColor: '#EBEDED',
        paddingLeft: 10, // Padding agar teks tidak menyentuh tepi
        color: '#7E8A8C',
    },
    icon: {
        color: '#7E8A8C',
        marginRight: 10, // Padding untuk mengatur posisi ikon
    },
});
