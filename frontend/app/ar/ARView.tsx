import React from 'react';
import { View } from 'react-native';


const ARView = () => {
  const device = useCameraDevice('back')
  const { hasPermission } = useCameraPermission()

  if (!hasPermission) return <PermissionsPage />
  if (device == null) return <NoCameraDeviceError />

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  );
}



export default ARView;