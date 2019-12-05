const inquiryBlankErrors = () => {
  const submitInquiryButton = document.getElementById('submit-inquiry');
  const nameField = document.getElementById('inquiry_name');
  const emailField = document.getElementById('inquiry_email');
  submitInquiryButton.addEventListener('click', (event) => {
    if (nameField.value === "") {
      event.preventDefault();
      document.querySelector('#name-error').innerText = "Name cannot be blank.";
    } 

    if (emailField.value === "") {
      event.preventDefault();
      document.querySelector('#email-error').innerText = "Email cannot be blank.";
    }
  })
}

export { inquiryBlankErrors };



//  const eventSaveError = () => {
//   const addEventButton = document.getElementById('make-event');
//   const titleInput = document.getElementById('event_title');
//   addEventButton.addEventListener('click', (event) => {

//     if (titleInput.value === "") {
//       // Prevent default send of form if value is empty
//       event.preventDefault();
//       // Append innerHTMl to form div to show "title can-t be blank"
//       document.querySelector("#error").innerText = "Title cannot be blank"
//       // else send form
//     }
//   })
// };

// eventSaveError();