const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Replace with your downloaded key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sample-firebase-ai-app.firebaseio.com',
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Endpoints

// Add calorie/macronutrient intake
app.post('/api/intake', async (req, res) => {
  try {
    const { userId, date, calories, fat, protein, carbs } = req.body;
    const docRef = db.collection('intakes').doc(userId).collection('entries').doc(date);
    await docRef.set({ calories, fat, protein, carbs }, { merge: true });
    res.status(200).send({ message: 'Intake added successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Add step count
app.post('/api/steps', async (req, res) => {
  try {
    const { userId, date, steps } = req.body;
    const docRef = db.collection('steps').doc(userId).collection('entries').doc(date);
    await docRef.set({ steps }, { merge: true });
    res.status(200).send({ message: 'Steps added successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Fetch daily, weekly, monthly, quarterly, and yearly data
app.get('/api/data/:userId/:period', async (req, res) => {
  try {
    const { userId, period } = req.params;
    const collection = period === 'steps' ? 'steps' : 'intakes';
    const snapshot = await db.collection(collection).doc(userId).collection('entries').get();
    const data = snapshot.docs.map(doc => ({ date: doc.id, ...doc.data() }));
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Fetch recent additions
app.get('/api/recent/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const intakeSnapshot = await db.collection('intakes').doc(userId).collection('entries').orderBy('date', 'desc').limit(5).get();
    const stepsSnapshot = await db.collection('steps').doc(userId).collection('entries').orderBy('date', 'desc').limit(5).get();

    const recentIntakes = intakeSnapshot.docs.map(doc => ({ date: doc.id, ...doc.data() }));
    const recentSteps = stepsSnapshot.docs.map(doc => ({ date: doc.id, ...doc.data() }));

    res.status(200).send({ recentIntakes, recentSteps });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
