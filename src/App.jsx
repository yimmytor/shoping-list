import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>      
        <AppRoutes />
    </FirestoreProvider>    
  )
}

export default App
