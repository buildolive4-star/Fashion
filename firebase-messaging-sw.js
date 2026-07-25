importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// आपकी Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyB0asuJKj9wyoInuS6_mhLdWDo4OkAM_k4",
  authDomain: "oooo-67c5c.firebaseapp.com",
  databaseURL: "https://oooo-67c5c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oooo-67c5c",
  storageBucket: "oooo-67c5c.firebasestorage.app",
  messagingSenderId: "605074662310",
  appId: "1:605074662310:web:aeb1610acf19a39413e567"
});

const messaging = firebase.messaging();

// Background Message Handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
