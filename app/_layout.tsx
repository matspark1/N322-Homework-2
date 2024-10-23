import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  useFonts ({
    "pop-reg":require("./../assets/fonts/Poppins-Regular.ttf"),
    "pop-med":require("./../assets/fonts/Poppins-Medium.ttf"),
    "pop-bold":require("./../assets/fonts/Poppins-Bold.ttf"),
    "pop-ex":require("./../assets/fonts/Poppins-ExtraBold.ttf"),
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <SignedIn>
            <Stack.Screen name="tabs/home" options={{ headerShown: false }} />
          </SignedIn>
          <SignedOut>
            <Stack.Screen name="index" />
            <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
          </SignedOut>
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
