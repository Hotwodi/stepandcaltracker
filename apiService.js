import { db } from './firebase';
import { collection, getDocs, addDoc, query, orderBy, limit } from 'firebase/firestore';

// Fetch data from a Firestore collection
export const fetchData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add data to a Firestore collection
export const addData = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

export const addSteps = async (userId, date, steps) => {
  const docRef = collection(db, 'steps', userId, 'entries');
  await addDoc(docRef, { date, steps });
};

export const fetchRecentActivity = async (userId) => {
  const stepsQuery = query(collection(db, 'steps', userId, 'entries'), orderBy('date', 'desc'), limit(5));
  const querySnapshot = await getDocs(stepsQuery);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
