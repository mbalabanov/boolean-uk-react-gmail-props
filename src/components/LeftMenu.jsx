function LeftMenu({ emails, hideRead, currentTab, actions }) {
  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "inbox" ? "active" : ""}`}
          onClick={() => actions.setCurrentTab("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmails.length}</span>
        </li>
        <li
          className={`item ${currentTab === "starred" ? "active" : ""}`}
          onClick={() => actions.setCurrentTab("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmails.length}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={(e) => actions.setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  );
}

export default LeftMenu;
