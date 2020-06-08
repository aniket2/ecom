import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVAKZt6H811oMt_gd21kySrTa_rXMQyho",
    authDomain: "ecom-c8e52.firebaseapp.com",
    databaseURL: "https://ecom-c8e52.firebaseio.com",
    projectId: "ecom-c8e52",
    storageBucket: "ecom-c8e52.appspot.com",
    messagingSenderId: "453412944981",
    appId: "1:453412944981:web:2ce54a056f4fdb56c3e8dc"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const cratedAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				cratedAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase; 