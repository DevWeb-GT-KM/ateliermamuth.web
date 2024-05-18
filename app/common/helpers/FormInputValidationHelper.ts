const isValidEmail = (email: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneNumberRegex =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  return phoneNumberRegex.test(phoneNumber);
};

export const newPhoneNumberValidation = (errorMessage: string) => ({
  isValidPhoneNumber: (phoneNumber: string) =>
    isValidPhoneNumber(phoneNumber) || errorMessage,
});

export const newEmailValidation = (errorMessage: string) => ({
  isValidEmail: (email: string) => isValidEmail(email) || errorMessage,
});
