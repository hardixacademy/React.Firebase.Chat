import React from 'react';

import '../node_modules/normalize.css/normalize.css';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { ChatRoom, SignIn, SignOut } from './Components';

firebase.initializeApp({
	apiKey: "AIzaSyBSbXWwo5NnE3b52I8zWhmYXbqSlZmGGXs",
    authDomain: "react-chat-d47bf.firebaseapp.com",
    databaseURL: "https://react-chat-d47bf.firebaseio.com",
    projectId: "react-chat-d47bf",
    storageBucket: "react-chat-d47bf.appspot.com",
    messagingSenderId: "1037345951939",
    appId: "1:1037345951939:web:ac654a39657d1e9c595276"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
	const [user] = useAuthState(auth);

	return <div className="App">
		<header>
		<h1>⚛️🔥💬</h1>
			{user && <SignOut auth={auth} />}
		</header>

		<section>
			{user ? <ChatRoom firebase={firebase} firestore={firestore} auth={auth} /> : <SignIn firebase={firebase} auth={auth} />}
		</section>
	</div>;
}

export default App;
