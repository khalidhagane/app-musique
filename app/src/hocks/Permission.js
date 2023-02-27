// import {PermissionsAndroid} from 'react-native';

// function Permission() {
//   const StoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Permission',
//           message: 'chi tkherbi9a needs access to your storage',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('External storage permission granted');
//       } else {
//         console.log('External storage permission denied');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return StoragePermission;
// }

// export default Permission;