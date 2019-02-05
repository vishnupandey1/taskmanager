
import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBUZEW6nvGrXp870QmDnkyc_7jgmzZmUEk",
    authDomain: "taskmanager-e9202.firebaseapp.com",
    databaseURL: "https://taskmanager-e9202.firebaseio.com",
    projectId: "taskmanager-e9202",
    storageBucket: "",
    messagingSenderId: "579924637522"
};

export const firebaseApp = firebase.initializeApp(config);

export const tasksRef = firebase.database().ref('tasks');

export const completeTasksRef = firebase.database().ref('completeTasksRef');
