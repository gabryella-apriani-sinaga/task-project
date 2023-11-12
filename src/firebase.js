import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaekitRWvjrGk8ZOZEIn2A0XYMqRVdJYM",
  authDomain: "test-simpleapp.firebaseapp.com",
  projectId: "test-simpleapp",
  storageBucket: "test-simpleapp.appspot.com",
  messagingSenderId: "400743071353",
  appId: "1:400743071353:web:61f02eb7a6d85a15221ea8",
};

const fireApp = initializeApp(firebaseConfig);
const fireDb = getDatabase(fireApp);

export default fireDb;
