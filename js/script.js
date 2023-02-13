const body = document.body;
const formContainer = body.querySelector(".form-container");
const form = body.querySelector("form");
const blogSubmitValues = body.querySelector(".blog-submit-values");
const blogName = blogSubmitValues.querySelector(".blog-name span");
const blogAuthorName = blogSubmitValues.querySelector(".blog-author-name span");
const blogContent = blogSubmitValues.querySelector(".blog-content p");

const submitButton = formContainer.querySelector(".submit-button-container button");

const blogNameInput = formContainer.querySelector(".blog-name-container input");
const blogAuthorInput = formContainer.querySelector(".blog-author-container input");
const blogContentTextarea = formContainer.querySelector(".blog-content-container textarea");

const errorBlogName = formContainer.querySelector(".blog-name-container .error");
const errorBlogAuthor = formContainer.querySelector(".blog-author-container .error");
const errorBlogContent = formContainer.querySelector(".blog-content-container .error");

const errors = [
  "*Please enter Blog name.",
  "*Please enter Blog's Author name.",
  "*Please enter Blog's Content.",
  "*Blog name should atleast be 3 characters long.",
  "*Blog's Author name should only contain alphabets & should atleast be 2 characters long.",
  "*Blog's content should atleast be 50 characters long."
];

let allInputsValid = true;

const formValidation = () => {
  allInputsValid = true;
  // Blog name Validation
  const blogNameValue = blogNameInput.value;
  if (blogNameValue == "" || blogNameValue == null) {
    allInputsValid = false;
    errorBlogName.innerText = errors[0];
    errorBlogName.classList.remove("display-none");
  } else {
    if (blogNameValue.length < 3) {
      allInputsValid = false;
      errorBlogName.innerText = errors[3];
      errorBlogName.classList.remove("display-none");
    } else {
      if (!errorBlogName.classList.contains("display-none")) {
        errorBlogName.classList.add("display-none");
      }
    }
  }

  // Blog's Author name Validation
  const blogAuthorNameValue = blogAuthorInput.value;
  if (blogAuthorNameValue == "" || blogAuthorNameValue == null) {
    allInputsValid = false;
    errorBlogAuthor.innerText = errors[1];
    errorBlogAuthor.classList.remove("display-none");
  } else {
    if (blogAuthorNameValue.length < 2) {
      allInputsValid = false;
      errorBlogAuthor.innerText = errors[4];
      errorBlogAuthor.classList.remove("display-none");
    } else if (!blogAuthorNameValue.match(/^[a-zA-Z]+$/)) {
      allInputsValid = false;
      errorBlogAuthor.innerText = errors[4];
      errorBlogAuthor.classList.remove("display-none");
    } else {
      if (!errorBlogAuthor.classList.contains("display-none")) {
        errorBlogAuthor.classList.add("display-none");
      }
    }
  }

  // Blog's Content Validation
  const blogContentValue = blogContentTextarea.value;
  if (blogContentValue == "" || blogContentValue == null) {
    allInputsValid = false;
    errorBlogContent.innerText = errors[2];
    errorBlogContent.classList.remove("display-none");
  } else if (blogContentValue.length < 50) {
    allInputsValid = false;
    errorBlogContent.innerText = errors[5];
    errorBlogContent.classList.remove("display-none");
  } else {
    if (!errorBlogContent.classList.contains("display-none")) {
      errorBlogContent.classList.add("display-none");
    }
  }

  if (allInputsValid) {
    return true;
  }

  return false;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (formValidation()) {
    formContainer.classList.add("display-none");
    blogSubmitValues.classList.remove("display-none");

    blogName.innerText = blogNameInput.value;
    blogAuthorName.innerText = blogAuthorInput.value;
    blogContent.innerText = blogContentTextarea.value.replace(/(\n![\n]*)|(\n)/g, "\n\n");

    const timer = setTimeout(() => {
      clearTimeout(timer);
      form.submit();
    }, 10000);
  }
});