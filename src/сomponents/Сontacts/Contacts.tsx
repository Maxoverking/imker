import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import styles from "./Contacts.module.css";
import { initContacUsForm } from "./interfaces/IContactUsForm";
import { Toast } from "bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { chat_id, telegramBaseURL } from "./constants/constants";

export default function Contacts(): JSX.Element {
  const [
    { firstName, lastName, email, phoneNumber, questionText },
    setContactFormData,
  ] = useState(initContacUsForm);

  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  if (toastTrigger && toastLiveExample) {
    const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener("click", () => {
      toastBootstrap.show();
    });
  }

  const collectAboutUsData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessageToTelegram = async (message: string) => {
    const contactInfoRequest = { chat_id, text: message };

    try {
      await axios.post(`${telegramBaseURL}`, contactInfoRequest);
      console.log("Notification successfully sent to Telegram");
    } catch (error) {
      console.error(
        "There was an error when sending a notification to Telegram:",
        error
      );
    }
  };

  const handleCreateRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `There is a new request:
    First name: ${firstName}
    Last name: ${lastName}
    Email: ${email}
    PhoneNumber: ${phoneNumber}
    Request text: ${questionText}
    `;
    sendMessageToTelegram(message);

    setContactFormData(initContacUsForm);
  };

  return (
    <>
      <Header />
      <div className={styles.topImgContainer}>
        <p className={styles.topImgText + " " + "text-center"}>CONTACT US</p>
      </div>

      <div className="container">
        <p className={styles.askText + " " + "text-center mb-4"}>
          Have a question for us?
        </p>

        <form onSubmit={handleCreateRequest}>
          <div className="row">
            <div className="col-md-5 d-flex align-items-center">
              <label
                htmlFor="firstNameInput"
                className="col-md-2 me-2 text-end"
              >
                First Name:
              </label>
              <input
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={collectAboutUsData}
                required
              />
            </div>

            <div className="col-md-7 d-flex align-items-center">
              <label
                htmlFor="emailInput"
                className="col-md-4 form-label me-2 text-end"
              >
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={collectAboutUsData}
                required
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-5 d-flex align-items-center">
              <label htmlFor="lastNameInput" className="col-md-2 me-2 text-end">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={collectAboutUsData}
                required
              />
            </div>

            <div className="col-md-7 d-flex align-items-center">
              <label
                htmlFor="phoneNumberInput"
                className="col-md-4 me-2 text-end"
              >
                Phone number:
              </label>
              <InputMask
                mask="+4 9(999) 999-9999"
                className="form-control"
                type="tel"
                placeholder="+4 _(___) ___-____"
                name="phoneNumber"
                value={phoneNumber}
                onChange={collectAboutUsData}
              />
            </div>
          </div>
          <p className="form-text text-center mt-4">
            We'll never share your data with anyone else
          </p>
          <div className="mb-3 mt-4">
            <textarea
              className="form-control"
              id="questionTextInput"
              rows={4}
              placeholder="leave your question here..."
              name="questionText"
              value={questionText}
              onChange={collectAboutUsData}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              id="liveToastBtn"
              type="submit"
              className="btn btn-primary "
            >
              Send request
            </button>
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.0557492735993!2d9.550200215761414!3d51.273292879597356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171b847e72346ef%3A0x75016efb7b949f29!2sPaseka%20Alexander%20Dr.med.!5e0!3m2!1sru!2sde!4v1690137506768!5m2!1sru!2sde"
        className={styles.map}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">
            ✔️ Your request has been successfully sent!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
