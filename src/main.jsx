
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyD5naypJSY7v0QGb54AsePuQ1vVaiGVfEA",
  authDomain: "monbro-e-commerce.firebaseapp.com",
  projectId: "monbro-e-commerce",
  storageBucket: "monbro-e-commerce.firebasestorage.app",
  messagingSenderId: "983048561274",
  appId: "1:983048561274:web:9377dfad503382ab8011c3",
  measurementId: "G-3CQ2MKT45X"
};

//const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
