import * as Font from 'expo-font';

console.log("Use Fonts Called!")

export default useFonts = async () =>
await Font.loadAsync({
    'GearUp': require('../assets/fonts/GearUp.ttf'),
    'GearUp Soft': require('../assets/fonts/GearUp Soft.ttf'),
    'Calibri': require('../assets/fonts/Calibri.ttf')
  });
