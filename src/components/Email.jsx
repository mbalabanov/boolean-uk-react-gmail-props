import { useState } from "react";

function Email({ email, actions }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <>
          {email.title}
          <br />
          <button onClick={() => setOpen(false)}>back</button>
        </>
      ) : (
        <li className={`email ${email.read ? "read" : "unread"}`}>
          <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              checked={email.read}
              onChange={() => actions.toggleRead(email)}
            />
          </div>
          <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              checked={email.starred}
              onChange={() => actions.toggleStar(email)}
            />
          </div>
          <div className="sender">{email.sender}</div>
          <div onClick={() => setOpen(true)} className="title">
            {email.title}
          </div>
        </li>
      )}
    </>
  );
}

export default Email;
