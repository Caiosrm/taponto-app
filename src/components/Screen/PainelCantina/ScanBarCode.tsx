import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, BarCodeEvent, PermissionStatus } from 'expo-barcode-scanner';

export default function BarcodeScanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status }: { status: PermissionStatus } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarcodeScanned = ({ data }: BarCodeEvent) => {
    setScanned(true);
    console.log('Código de barras lido:', data);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
      />
      {scanned && (
        <Text style={styles.scanText}>Escaneado com sucesso!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scanText: {
    marginTop: 16,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
