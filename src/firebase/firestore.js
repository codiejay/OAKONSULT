import { firestore } from "./config";
const eventRef = firestore.collection("events");
const galleryRef = firestore.collection("gallery");
const quotesRef = firestore.collection("quotes");
const courseRef = firestore.collection("courses");
const blogRef = firestore.collection("blogs");
const inboxRef = firestore.collection("inbox");

export const OnAddPhoto = (data) => {
  galleryRef.doc().set(data);
};

export const OnAddQuote = (data) => {
  quotesRef.doc().set(data);
};

export const OnAddEvent = (data) => {
  eventRef.doc(data.date).set(data);
};

export const sendNotification = (data) => {
  const timestamp = Date.now();
  inboxRef.doc(`${timestamp}`).set({ ...data, timestamp, seen: false });
};
export const onGetCourse = (courseId, data) => {
  courseRef.doc(courseId).collection("attendees").doc(data.email).set(data);
  sendNotification({ ...data, title: `${data.name} enrolled!!!` });
};

export const OnPost = (data) => {
  blogRef.doc(data.id).set(data);
};
