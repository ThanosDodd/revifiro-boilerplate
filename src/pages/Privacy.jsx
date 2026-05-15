import "./Pages.css";

export default function Privacy() {
  return (
    <div className="page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. We do not collect any personal
        information from our users. We do not use cookies or any tracking
        technologies. All data is stored locally on your device and is not
        shared with any third parties.
      </p>
      <p>
        By using our app, you agree to this privacy policy. If you have any
        questions or concerns, please contact us at{" "}
        <a
          href="https://forms.gle/8tgKCeupboi8mDVu8"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://forms.gle/8tgKCeupboi8mDVu8
        </a>
      </p>
    </div>
  );
}
