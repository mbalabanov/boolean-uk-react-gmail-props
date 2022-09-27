import { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/Emails";

import initialEmails from "./data/emails";

import "./styles/app.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  //  const unreadEmails = emails.filter((email) => !email.read);
  //  const starredEmails = emails.filter((email) => email.starred);

  // const getUnReadEmails = (emails) => emails.filter((email) => !email.read);
  const getStarredEmails = (emails) => emails.filter((email) => email.starred);

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      </header>
      <LeftMenu
        emails={emails}
        hideRead={hideRead}
        currentTab={currentTab}
        actions={{ setHideRead, setCurrentTab }}
      />
      <Emails emails={filteredEmails} actions={{ toggleStar, toggleRead }} />
    </div>
  );
}

export default App;
