import "./Footer.css";

export default function Footer() {
    return (
      <>
        <footer>
            <div className="footer--desktop margin">
            <div className="trademark">
                <svg
                className="desktop-emblem"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M18.7676 0V11.2921L29.073 7.75281L31 13.8202L20.6108 17.2753L27.4811 26.1236L22.3703 30L15.4162 20.8146L8.88108 29.9157L3.77027 26.0393L10.3892 17.2753L0 13.8202L1.92703 7.75281L12.1486 11.3764V0H18.7676Z"
                    fill="white"
                />
                </svg>
                <svg
                className="mobile-emblem"
                width="16"
                height="15"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M18.7676 0V11.2921L29.073 7.75281L31 13.8202L20.6108 17.2753L27.4811 26.1236L22.3703 30L15.4162 20.8146L8.88108 29.9157L3.77027 26.0393L10.3892 17.2753L0 13.8202L1.92703 7.75281L12.1486 11.3764V0H18.7676Z"
                    fill="white"
                />
                </svg>
                <p className="link-item">Created by Andrew.</p>
            </div>
            <div className="links">
                <p><a className="link-item" href="https://www.behance.net/andrewghaddad/">Behance</a></p>
                <p><a className="link-item" href="https://www.linkedin.com/in/andrewghaddad/">Linkedin</a></p>
                <p><a className="link-item" href="https://github.com/andrewghaddad">Github</a></p>
            </div>
            </div>
        </footer>
      </>
    );
  }