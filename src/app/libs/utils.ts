// const keyName: string = 'test';

// const getStoredCookie = () => {
//   let storage;
//   chrome.storage.local.get([keyName], function (result) {
//     console.log('TEST Value currently is ' + result.test);
//     storage = result.test;
//   });
//   return storage;
// };

// const clearCookieFiles = () => {
//   chrome.storage.local.remove(keyName, () => {});
// };

// const storeCookies = (cookies) => {
//   let obj = {};
//   obj[keyName] = cookies;
//   chrome.storage.local.set(obj, () => {
//     console.log('Value is set to ' + cookies);
//   });
// };

// default export {getStoredCookie, clearCookieFiles, storeCookies };
