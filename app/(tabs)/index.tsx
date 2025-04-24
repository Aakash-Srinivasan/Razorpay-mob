import React from 'react';
import { View, Button, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const handlePayment = () => {
    const options = {
      order_id: 'order_Q7qjFCQoswSSRZ', 
      description: 'Purchase Product',
      image: 'https://your-logo-url.com/logo.png',
      currency: 'INR',
      key: 'rzp_test_YhmWAo0x7uWnK5',  // Replace with your Razorpay Key
      amount: 50000, // Amount in paise (₹500.00)
      name: 'Yoogesh TCS Employee',
      prefill: {
        email: 'customer@example.com',
        contact: '9876543210',
        name: 'John Doe'
      },
      theme: { color: '#7E8EFF' }
    };

    RazorpayCheckout.open(options as any)
      .then((data : any) => {
        Alert.alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error: any) => {
        Alert.alert('Payment Failed', error.description);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default App;
