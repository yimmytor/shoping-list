import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import ListaArticulos from './components/ListaArticulos/ListaArticulos';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>      
      <ListaArticulos />      
    </FirestoreProvider>    
  )
}

export default App
