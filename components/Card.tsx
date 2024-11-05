import { Link } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ButtonProps = {
    name: string;
    icon: string;
};

type Props = {
    number?: number; // number bisa menjadi undefined untuk tombol tanpa angka
    title: string;
    buttons?: ButtonProps[]; // Tambahkan properti untuk tombol
    style?: ViewStyle;
};

const Card: React.FC<Props> = ({ number, title, buttons, style }) => {
    const formattedNumber = (number || 0).toLocaleString('id-ID', { minimumFractionDigits: 0 });
    const displayNumber = title === 'Earnings' ? `Rp ${formattedNumber}` : formattedNumber;

    return (
        <View style={[styles.card, style]}>
            {number !== undefined ? (
                <>
                    <Text style={styles.number}>{displayNumber}</Text>
                    <Text style={styles.label}>{title}</Text>
                </>
            ) : (
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonsRow}>
                        {buttons?.map((button, index) => (
                        <Link key={index} href={button.route} style={styles.buttonLink}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Icon name={button.icon} size={20} color="#193238" />
                            <Text style={styles.buttonText}>{button.name}</Text>
                            </View>
                        </Link>
                        ))}
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    number: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#193238',
    },
    label: {
        fontSize: 14,
        color: '#7E8A8C',
        marginBottom: 10,
    },
    buttonLink: {
        flex: 1,
        flexDirection: 'column', // Ensure column layout
        alignItems: 'center',
        justifyContent: 'center', // Ensure content is centered
        backgroundColor: 'transparent',
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 4,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute buttons evenly
        flexWrap: 'wrap',
    },
    button: {
        flex: 1, // Make all buttons take the same amount of space
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#000',
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 4,
    },
    buttonText: {
        color: '#193238',
        marginTop: 5,
    },
});

export default Card;
