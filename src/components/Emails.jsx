import Email from "./Email";

function Emails({ emails, actions }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email) => (
          <Email key={email.id} email={email} actions={actions} />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
