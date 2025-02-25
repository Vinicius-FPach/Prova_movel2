import { Stack } from 'expo-router/stack';
import { AuthProvider } from '../store/AuthContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function Layout() {
  return (
    <AuthProvider>
      <ActionSheetProvider>
        <Stack />
      </ActionSheetProvider>
    </AuthProvider>
  );
}
