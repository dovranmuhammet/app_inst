import { InstagramAPI } from '../libs/Instagram';
import { createNotification } from '../libs/notification.js';

const igClient = InstagramAPI.new();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getUnfollowers') {
    igClient.unfollowers().then((resp) => {
      // No error handling rightNow.
      chrome.storage.local.set({ unfollowers: JSON.stringify(resp) }, () => {
        createNotification('Request Done', 'unfollowers list ready');
        chrome.action.setBadgeText({ text: '*' });
        chrome.action.setBadgeBackgroundColor({ color: 'red' });
        sendResponse(resp);
      });
    });
  }

  if (request.action === 'unfollowersCache') {
    chrome.storage.local.get(['unfollowers'], (result) => {
      sendResponse(JSON.parse(result.unfollowers) || []);
    });
  }
  return true;
});

let url = 'https://instagram.com';

chrome.cookies.getAll({ url: url }, (data) => {
  let cookies = {
    version: 'tough-cookie@2.5.0',
    storeType: 'MemoryCookieStore',
    rejectPublicSuffixes: true,
    cookies: data,
  };
  let value = JSON.stringify(cookies);
  // chrome.storage.local.set({ test: value }, function () {
  //   console.log('Value is set to ' + value);
  // });

  // console.log('cookies: ', data);
  // console.log('new cookies: ', cookies);
  // console.log('new cookies JSON: ', value.length);
  // console.log('new cookies JSON: ', sizeOf(value));
});

// chrome.cookies.get({ name: 'sessionid', url }, (sessionId) => {
//   if (sessionId)
//     chrome.cookies.get({ name: 'ds_user_id', url }, (userId) =>
//       console.log('userId: ', userId)
//     );
// });
