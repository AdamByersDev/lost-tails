import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeAuth,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = initializeAuth(app);

const usersRef = collection(db, 'users');

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(usersRef, email), {
      firstName,
      lastName,
    });

    console.log('Success', 'User registered successfully!');
  } catch (e) {
    console.log('Error', 'Error registering user: ' + e);
  }
};

export const login = async (email, password, onSuccess, onError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    onSuccess();
  } catch (e) {
    console.log('Error', 'Invalid credentials: ' + e);
    onError();
  }
};

export const getUserInfo = async () => {
  try {
    const email = auth?.currentUser?.email;
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { firstName, lastName } = docSnap.data();
      return { firstName, lastName, email };
    } else {
      console.log('Error', 'No user found!');
      return {};
    }
  } catch (e) {
    console.log('Error', 'Error retrieving user: ' + e);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('Success', 'User logged out!');
  } catch (e) {
    console.log('Error', 'Error login out: ' + e);
  }
};

export const authObserver = (callback) =>
  auth.onAuthStateChanged((user) => callback(user));
