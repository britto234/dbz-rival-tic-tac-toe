
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.05cae3a4cb3c4614825ec8fd5012e96a',
  appName: 'dbz-rival-tic-tac-toe',
  webDir: 'dist',
  server: {
    url: "https://05cae3a4-cb3c-4614-825e-c8fd5012e96a.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ff6b35",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  }
};

export default config;
