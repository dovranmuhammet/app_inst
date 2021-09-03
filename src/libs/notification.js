self.addEventListener('notificationclick', (e) => e.notification.close());
console.log('TEST Y');

const createNotification = (title, body) => {
  registration.showNotification(title, {
    body,
    icon: 'logo.png',
    // data: "UUID",
    // message: "Request Done",
    // actions: [
    //   { action: 'Open', title: 'Open' },
    //   { action: 'Close', title: 'Close' }
    // ]
  });
};

module.exports = { createNotification };
