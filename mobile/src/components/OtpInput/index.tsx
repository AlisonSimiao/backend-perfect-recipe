import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // Supondo um OTP de 4 dígitos

  const handleChange = (text: string, index: number) => {
    // Only allow numeric input
    if (/^[0-9]*$/.test(text) || text === '') { // Allow empty string for deletion
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
    }

    // Mover para o próximo campo
    // if (text && index < otp.length - 1) {
    //   const nextInput = otpRefs[index + 1];
    //   if (nextInput) {
    //     nextInput.focus();
    //   }
    // }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          id={`otp-input-${index}`}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  input: {
    width: 75,
    height: 90,
    backgroundColor: '#f3f5f7',
    textAlign: 'center',
    fontSize: 28,
    color: '#66324b',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});

export default OtpInput; 