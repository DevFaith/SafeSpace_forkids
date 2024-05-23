import { errorHandler } from "../errors/error.js";

const helpValidator = (firstName, lastName, email, contact, age, birth, gender, isHidden) => {
  // Check all the data
  if (
    !firstName || firstName === '' ||
    !lastName || lastName === '' ||
    !email || email === '' ||
    !contact || contact === '' ||
    !age || age === '' ||
    !birth || birth === '' ||
    !gender || gender === '' ||
    isHidden === undefined
  ) {
    return errorHandler(400, 'All fields are required');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return errorHandler(400, 'Invalid email address');
  }

  // Contact validation
  if (contact.toString().length !== 10) {
    return errorHandler(400, 'Invalid phone number');
  } else {
    if (isNaN(contact)) {
      return errorHandler(400, 'Invalid phone number');
    }
  }

  // Age varification
  try {
    if (isNaN(age) || Number(age) < 3 || Number(age) > 100) {
      return errorHandler(400, 'Invalid age');
    }
  } catch (err) {
    return errorHandler(400, 'Invalid date of birth');
  }
  
  // Birth validate
  try {
    const isValidDate = (new Date(birth)).toISOString().slice(0,10) === birth;
    if (!isValidDate) {
      return errorHandler(400, 'Invalid date of birth');
    }
  } catch (err) {
    return errorHandler(400, 'Invalid date of birth');
  }
  
  // Validate gender
  // console.log(gender)
  // if (gender !== 'Male' || gender !== 'Female') {
  //   return errorHandler(400, 'Unknown gender');
  // }

  return 1000;

};

export { helpValidator };
