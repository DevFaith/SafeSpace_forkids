import { setDoc, doc, collection } from 'firebase/firestore';
import { db } from '../config/firebase.js';
import { helpValidator } from "../utils/validator/help.validator.js";

export const helpUser = async (req, res, next) => {
  const { firstName, lastName, email, contact, age, birth, gender, isHidden } = req.body;

  const isOk = helpValidator(firstName, lastName, email, contact, age, birth, gender, isHidden);

  if (isOk !== 1000){
    next(isOk);
  } else {
    isHidden ? true : false;

    try {
      const helpCollectionRef = collection(db, 'help');
      const userDocRef = doc(helpCollectionRef);
      const fireUser = await setDoc(userDocRef, {
        firstName,
        lastName,
        email,
        contact,
        age,
        birth,
        gender,
        isHidden
      });

      return res.status(201).json({ message: 'We got your request.' });
    } catch (err) {
      next(err);
    }
  }

};