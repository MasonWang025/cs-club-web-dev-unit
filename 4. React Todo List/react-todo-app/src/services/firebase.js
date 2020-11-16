import firebase from "firebase/app";
import "firebase/firestore";
import {v4} from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyDu_XAIpc_lWDfQ53iLpVzyhfyPJeORrVk",
    authDomain: "todo-list-66cb1.firebaseapp.com",
    databaseURL: "https://todo-list-66cb1.firebaseio.com",
    projectId: "todo-list-66cb1",
    storageBucket: "todo-list-66cb1.appspot.com",
    messagingSenderId: "756520860312",
    appId: "1:756520860312:web:7594e7ef6c748eeabaaeed",
    measurementId: "G-2T5V0YJGRL"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const addTodo = (listid, name) => {
    let uuid = v4();
    db.collection(listid).doc(uuid).set(
        {
            name: name,
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
    )
    return uuid;
}

export const setTodo = (listid, uuid, completed) => {
    db.collection(listid).doc(uuid).update(
        {
            completed: completed
        }
    )
}
