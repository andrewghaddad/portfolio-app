import "./Navbar.css";

import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
    <div className="navbar">
        <li className="nav--logo">
            <Link to="/">
                <svg className="logo--desktop" width="257" height="31" viewBox="0 0 257 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M139.431 11V14.3876L142.413 13.3258L142.97 15.1461L139.964 16.1826L141.952 18.8371L140.473 20L138.461 17.2444L136.57 19.9747L135.091 18.8118L137.006 16.1826L134 15.1461L134.558 13.3258L137.515 14.4129V11H139.431Z" fill="#1B24F8"/>
                    <path d="M0 19.872C0 18.5494 0.426667 17.4934 1.28 16.704C2.13333 15.8934 3.264 15.392 4.672 15.2L8.832 14.592C9.62133 14.4854 10.016 14.1014 10.016 13.44C10.016 12.6294 9.73867 11.968 9.184 11.456C8.62933 10.944 7.79733 10.688 6.688 10.688C5.664 10.688 4.85333 10.976 4.256 11.552C3.65867 12.1067 3.30667 12.8534 3.2 13.792L0.32 13.12C0.469333 11.648 1.14133 10.4534 2.336 9.53603C3.53067 8.59737 4.96 8.12803 6.624 8.12803C8.8 8.12803 10.4107 8.66137 11.456 9.72803C12.5013 10.7734 13.024 12.1174 13.024 13.76V21.472C13.024 22.3894 13.088 23.232 13.216 24H10.272C10.1653 23.36 10.112 22.6667 10.112 21.92C9.68533 22.6027 9.056 23.2 8.224 23.712C7.41333 24.224 6.38933 24.48 5.152 24.48C3.63733 24.48 2.4 24.032 1.44 23.136C0.48 22.2187 0 21.1307 0 19.872ZM5.568 21.952C6.912 21.952 7.98933 21.5894 8.8 20.864C9.61067 20.1387 10.016 18.9867 10.016 17.408V16.704L5.312 17.408C4.62933 17.5147 4.08533 17.76 3.68 18.144C3.27467 18.528 3.072 19.0507 3.072 19.712C3.072 20.3094 3.296 20.832 3.744 21.28C4.21333 21.728 4.82133 21.952 5.568 21.952Z" fill="black"/>
                    <path d="M20.718 15.104V24H17.71V8.60803H20.654V10.816C21.678 9.04536 23.2567 8.16003 25.39 8.16003C27.1607 8.16003 28.5153 8.72536 29.454 9.85603C30.414 10.9867 30.894 12.448 30.894 14.24V24H27.886V14.752C27.886 12.1707 26.6913 10.88 24.302 10.88C23.1713 10.88 22.286 11.2854 21.646 12.096C21.0273 12.8854 20.718 13.888 20.718 15.104Z" fill="black"/>
                    <path d="M37.4707 16.256C37.4707 17.8774 37.8654 19.2 38.6548 20.224C39.4654 21.248 40.5747 21.76 41.9827 21.76C43.3267 21.76 44.4041 21.2374 45.2148 20.192C46.0254 19.1467 46.4308 17.8134 46.4308 16.192C46.4308 14.592 46.0361 13.3014 45.2467 12.32C44.4574 11.3387 43.3801 10.848 42.0148 10.848C40.6494 10.848 39.5508 11.3494 38.7188 12.352C37.8867 13.3547 37.4707 14.656 37.4707 16.256ZM46.4627 21.92V21.664C46.0574 22.4534 45.4388 23.1147 44.6068 23.648C43.7961 24.16 42.8254 24.416 41.6948 24.416C39.4974 24.416 37.7268 23.648 36.3828 22.112C35.0601 20.5547 34.3988 18.6027 34.3988 16.256C34.3988 14.016 35.0814 12.1174 36.4468 10.56C37.8121 8.98137 39.5614 8.19203 41.6948 8.19203C42.9534 8.19203 43.9774 8.44803 44.7668 8.96003C45.5561 9.4507 46.1001 10.0587 46.3988 10.784V0.832031H49.3748V21.152C49.3748 22.1974 49.4281 23.1467 49.5348 24H46.6227C46.5161 23.4027 46.4627 22.7094 46.4627 21.92Z" fill="black"/>
                    <path d="M63.0353 8.44803V11.648C62.5873 11.584 62.1499 11.552 61.7233 11.552C58.9073 11.552 57.4992 13.1307 57.4992 16.288V24H54.4912V8.60803H57.4352V11.296C58.3739 9.33337 59.9099 8.35203 62.0433 8.35203C62.3846 8.35203 62.7153 8.38403 63.0353 8.44803Z" fill="black"/>
                    <path d="M68.037 14.72H76.453C76.4103 13.568 76.0263 12.6294 75.301 11.904C74.5757 11.1574 73.5517 10.784 72.229 10.784C71.0343 10.784 70.053 11.1787 69.285 11.968C68.517 12.736 68.101 13.6534 68.037 14.72ZM76.901 18.72L79.493 19.616C79.045 21.0454 78.213 22.2187 76.997 23.136C75.781 24.032 74.309 24.48 72.581 24.48C70.4263 24.48 68.5917 23.744 67.077 22.272C65.5837 20.7787 64.837 18.7734 64.837 16.256C64.837 13.9094 65.5623 11.968 67.013 10.432C68.4637 8.89603 70.1917 8.12803 72.197 8.12803C74.5223 8.12803 76.3357 8.86403 77.637 10.336C78.9383 11.7867 79.589 13.7387 79.589 16.192C79.589 16.576 79.5677 16.896 79.525 17.152H67.941C67.9623 18.5174 68.4103 19.6374 69.285 20.512C70.181 21.3867 71.2797 21.824 72.581 21.824C74.7783 21.824 76.2183 20.7894 76.901 18.72Z" fill="black"/>
                    <path d="M91.9445 8.60803H95.0485L99.0485 20.192L102.44 8.60803H105.609L100.617 24H97.5125L93.4165 12.288L89.4165 24H86.2485L81.1925 8.60803H84.4885L87.9445 20.192L91.9445 8.60803Z" fill="black"/>
                    <path d="M115.527 24.832L118.439 24.16C118.546 25.248 118.984 26.144 119.752 26.848C120.52 27.5734 121.48 27.936 122.632 27.936C125.768 27.936 127.336 26.272 127.336 22.944V20.736C126.952 21.4827 126.343 22.0907 125.511 22.56C124.701 23.0294 123.741 23.264 122.632 23.264C120.583 23.264 118.888 22.5707 117.544 21.184C116.221 19.776 115.56 17.984 115.56 15.808C115.56 13.696 116.221 11.9254 117.544 10.496C118.866 9.04537 120.562 8.32003 122.632 8.32003C124.978 8.32003 126.557 9.1307 127.368 10.752V8.60803H130.344V22.848C130.344 23.872 130.205 24.8214 129.928 25.696C129.672 26.592 129.256 27.4134 128.68 28.16C128.104 28.9067 127.293 29.4934 126.247 29.92C125.223 30.3467 124.018 30.56 122.632 30.56C120.733 30.56 119.122 30.016 117.799 28.928C116.477 27.8614 115.719 26.496 115.527 24.832ZM123.079 20.736C124.381 20.736 125.437 20.288 126.247 19.392C127.058 18.4747 127.464 17.28 127.464 15.808C127.464 14.336 127.058 13.152 126.247 12.256C125.437 11.3387 124.381 10.88 123.079 10.88C121.757 10.88 120.68 11.328 119.848 12.224C119.037 13.12 118.632 14.3147 118.632 15.808C118.632 17.3227 119.026 18.528 119.815 19.424C120.626 20.2987 121.714 20.736 123.079 20.736Z" fill="black"/>
                    <path d="M157.008 15.112V24.168H154V1H157.008V10.568C158.032 9.07467 159.589 8.328 161.68 8.328C163.451 8.328 164.805 8.89333 165.744 10.024C166.704 11.1547 167.184 12.616 167.184 14.408V24.168H164.176V14.92C164.176 12.3387 162.981 11.048 160.592 11.048C159.483 11.048 158.619 11.432 158 12.2C157.381 12.9467 157.051 13.9173 157.008 15.112Z" fill="black"/>
                    <path d="M171.009 20.04C171.009 18.7173 171.435 17.6613 172.289 16.872C173.142 16.0613 174.273 15.56 175.681 15.368L179.841 14.76C180.63 14.6533 181.025 14.2693 181.025 13.608C181.025 12.7973 180.747 12.136 180.193 11.624C179.638 11.112 178.806 10.856 177.697 10.856C176.673 10.856 175.862 11.144 175.265 11.72C174.667 12.2747 174.315 13.0213 174.209 13.96L171.329 13.288C171.478 11.816 172.15 10.6213 173.345 9.704C174.539 8.76533 175.969 8.296 177.633 8.296C179.809 8.296 181.419 8.82933 182.465 9.896C183.51 10.9413 184.033 12.2853 184.033 13.928V21.64C184.033 22.5573 184.097 23.4 184.225 24.168H181.281C181.174 23.528 181.121 22.8347 181.121 22.088C180.694 22.7707 180.065 23.368 179.233 23.88C178.422 24.392 177.398 24.648 176.161 24.648C174.646 24.648 173.409 24.2 172.449 23.304C171.489 22.3867 171.009 21.2987 171.009 20.04ZM176.577 22.12C177.921 22.12 178.998 21.7573 179.809 21.032C180.619 20.3067 181.025 19.1547 181.025 17.576V16.872L176.321 17.576C175.638 17.6827 175.094 17.928 174.689 18.312C174.283 18.696 174.081 19.2187 174.081 19.88C174.081 20.4773 174.305 21 174.753 21.448C175.222 21.896 175.83 22.12 176.577 22.12Z" fill="black"/>
                    <path d="M190.511 16.424C190.511 18.0453 190.905 19.368 191.695 20.392C192.505 21.416 193.615 21.928 195.023 21.928C196.367 21.928 197.444 21.4053 198.255 20.36C199.065 19.3147 199.471 17.9813 199.471 16.36C199.471 14.76 199.076 13.4693 198.287 12.488C197.497 11.5067 196.42 11.016 195.055 11.016C193.689 11.016 192.591 11.5173 191.759 12.52C190.927 13.5227 190.511 14.824 190.511 16.424ZM199.503 22.088V21.832C199.097 22.6213 198.479 23.2827 197.647 23.816C196.836 24.328 195.865 24.584 194.735 24.584C192.537 24.584 190.767 23.816 189.423 22.28C188.1 20.7227 187.439 18.7707 187.439 16.424C187.439 14.184 188.121 12.2853 189.487 10.728C190.852 9.14933 192.601 8.36 194.735 8.36C195.993 8.36 197.017 8.616 197.807 9.128C198.596 9.61867 199.14 10.2267 199.439 10.952V1H202.415V21.32C202.415 22.3653 202.468 23.3147 202.575 24.168H199.663C199.556 23.5707 199.503 22.8773 199.503 22.088Z" fill="black"/>
                    <path d="M209.323 16.424C209.323 18.0453 209.718 19.368 210.507 20.392C211.318 21.416 212.427 21.928 213.835 21.928C215.179 21.928 216.257 21.4053 217.067 20.36C217.878 19.3147 218.283 17.9813 218.283 16.36C218.283 14.76 217.889 13.4693 217.099 12.488C216.31 11.5067 215.233 11.016 213.867 11.016C212.502 11.016 211.403 11.5173 210.571 12.52C209.739 13.5227 209.323 14.824 209.323 16.424ZM218.315 22.088V21.832C217.91 22.6213 217.291 23.2827 216.459 23.816C215.649 24.328 214.678 24.584 213.547 24.584C211.35 24.584 209.579 23.816 208.235 22.28C206.913 20.7227 206.251 18.7707 206.251 16.424C206.251 14.184 206.934 12.2853 208.299 10.728C209.665 9.14933 211.414 8.36 213.547 8.36C214.806 8.36 215.83 8.616 216.619 9.128C217.409 9.61867 217.953 10.2267 218.251 10.952V1H221.227V21.32C221.227 22.3653 221.281 23.3147 221.387 24.168H218.475C218.369 23.5707 218.315 22.8773 218.315 22.088Z" fill="black"/>
                    <path d="M225.384 20.04C225.384 18.7173 225.81 17.6613 226.664 16.872C227.517 16.0613 228.648 15.56 230.056 15.368L234.216 14.76C235.005 14.6533 235.4 14.2693 235.4 13.608C235.4 12.7973 235.122 12.136 234.568 11.624C234.013 11.112 233.181 10.856 232.072 10.856C231.048 10.856 230.237 11.144 229.64 11.72C229.042 12.2747 228.69 13.0213 228.584 13.96L225.704 13.288C225.853 11.816 226.525 10.6213 227.72 9.704C228.914 8.76533 230.344 8.296 232.008 8.296C234.184 8.296 235.794 8.82933 236.84 9.896C237.885 10.9413 238.408 12.2853 238.408 13.928V21.64C238.408 22.5573 238.472 23.4 238.6 24.168H235.656C235.549 23.528 235.496 22.8347 235.496 22.088C235.069 22.7707 234.44 23.368 233.608 23.88C232.797 24.392 231.773 24.648 230.536 24.648C229.021 24.648 227.784 24.2 226.824 23.304C225.864 22.3867 225.384 21.2987 225.384 20.04ZM230.952 22.12C232.296 22.12 233.373 21.7573 234.184 21.032C234.994 20.3067 235.4 19.1547 235.4 17.576V16.872L230.696 17.576C230.013 17.6827 229.469 17.928 229.064 18.312C228.658 18.696 228.456 19.2187 228.456 19.88C228.456 20.4773 228.68 21 229.128 21.448C229.597 21.896 230.205 22.12 230.952 22.12Z" fill="black"/>
                    <path d="M244.886 16.424C244.886 18.0453 245.28 19.368 246.07 20.392C246.88 21.416 247.99 21.928 249.398 21.928C250.742 21.928 251.819 21.4053 252.63 20.36C253.44 19.3147 253.846 17.9813 253.846 16.36C253.846 14.76 253.451 13.4693 252.662 12.488C251.872 11.5067 250.795 11.016 249.43 11.016C248.064 11.016 246.966 11.5173 246.134 12.52C245.302 13.5227 244.886 14.824 244.886 16.424ZM253.878 22.088V21.832C253.472 22.6213 252.854 23.2827 252.022 23.816C251.211 24.328 250.24 24.584 249.11 24.584C246.912 24.584 245.142 23.816 243.798 22.28C242.475 20.7227 241.814 18.7707 241.814 16.424C241.814 14.184 242.496 12.2853 243.862 10.728C245.227 9.14933 246.976 8.36 249.11 8.36C250.368 8.36 251.392 8.616 252.182 9.128C252.971 9.61867 253.515 10.2267 253.814 10.952V1H256.79V21.32C256.79 22.3653 256.843 23.3147 256.95 24.168H254.038C253.931 23.5707 253.878 22.8773 253.878 22.088Z" fill="black"/>
                </svg>
                <svg className="logo--mobile" width="128.5" height="16" viewBox="0 0 257 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M139.431 11V14.3876L142.413 13.3258L142.97 15.1461L139.964 16.1826L141.952 18.8371L140.473 20L138.461 17.2444L136.57 19.9747L135.091 18.8118L137.006 16.1826L134 15.1461L134.558 13.3258L137.515 14.4129V11H139.431Z" fill="#1B24F8"/>
                    <path d="M0 19.872C0 18.5494 0.426667 17.4934 1.28 16.704C2.13333 15.8934 3.264 15.392 4.672 15.2L8.832 14.592C9.62133 14.4854 10.016 14.1014 10.016 13.44C10.016 12.6294 9.73867 11.968 9.184 11.456C8.62933 10.944 7.79733 10.688 6.688 10.688C5.664 10.688 4.85333 10.976 4.256 11.552C3.65867 12.1067 3.30667 12.8534 3.2 13.792L0.32 13.12C0.469333 11.648 1.14133 10.4534 2.336 9.53603C3.53067 8.59737 4.96 8.12803 6.624 8.12803C8.8 8.12803 10.4107 8.66137 11.456 9.72803C12.5013 10.7734 13.024 12.1174 13.024 13.76V21.472C13.024 22.3894 13.088 23.232 13.216 24H10.272C10.1653 23.36 10.112 22.6667 10.112 21.92C9.68533 22.6027 9.056 23.2 8.224 23.712C7.41333 24.224 6.38933 24.48 5.152 24.48C3.63733 24.48 2.4 24.032 1.44 23.136C0.48 22.2187 0 21.1307 0 19.872ZM5.568 21.952C6.912 21.952 7.98933 21.5894 8.8 20.864C9.61067 20.1387 10.016 18.9867 10.016 17.408V16.704L5.312 17.408C4.62933 17.5147 4.08533 17.76 3.68 18.144C3.27467 18.528 3.072 19.0507 3.072 19.712C3.072 20.3094 3.296 20.832 3.744 21.28C4.21333 21.728 4.82133 21.952 5.568 21.952Z" fill="black"/>
                    <path d="M20.718 15.104V24H17.71V8.60803H20.654V10.816C21.678 9.04536 23.2567 8.16003 25.39 8.16003C27.1607 8.16003 28.5153 8.72536 29.454 9.85603C30.414 10.9867 30.894 12.448 30.894 14.24V24H27.886V14.752C27.886 12.1707 26.6913 10.88 24.302 10.88C23.1713 10.88 22.286 11.2854 21.646 12.096C21.0273 12.8854 20.718 13.888 20.718 15.104Z" fill="black"/>
                    <path d="M37.4707 16.256C37.4707 17.8774 37.8654 19.2 38.6548 20.224C39.4654 21.248 40.5747 21.76 41.9827 21.76C43.3267 21.76 44.4041 21.2374 45.2148 20.192C46.0254 19.1467 46.4308 17.8134 46.4308 16.192C46.4308 14.592 46.0361 13.3014 45.2467 12.32C44.4574 11.3387 43.3801 10.848 42.0148 10.848C40.6494 10.848 39.5508 11.3494 38.7188 12.352C37.8867 13.3547 37.4707 14.656 37.4707 16.256ZM46.4627 21.92V21.664C46.0574 22.4534 45.4388 23.1147 44.6068 23.648C43.7961 24.16 42.8254 24.416 41.6948 24.416C39.4974 24.416 37.7268 23.648 36.3828 22.112C35.0601 20.5547 34.3988 18.6027 34.3988 16.256C34.3988 14.016 35.0814 12.1174 36.4468 10.56C37.8121 8.98137 39.5614 8.19203 41.6948 8.19203C42.9534 8.19203 43.9774 8.44803 44.7668 8.96003C45.5561 9.4507 46.1001 10.0587 46.3988 10.784V0.832031H49.3748V21.152C49.3748 22.1974 49.4281 23.1467 49.5348 24H46.6227C46.5161 23.4027 46.4627 22.7094 46.4627 21.92Z" fill="black"/>
                    <path d="M63.0353 8.44803V11.648C62.5873 11.584 62.1499 11.552 61.7233 11.552C58.9073 11.552 57.4992 13.1307 57.4992 16.288V24H54.4912V8.60803H57.4352V11.296C58.3739 9.33337 59.9099 8.35203 62.0433 8.35203C62.3846 8.35203 62.7153 8.38403 63.0353 8.44803Z" fill="black"/>
                    <path d="M68.037 14.72H76.453C76.4103 13.568 76.0263 12.6294 75.301 11.904C74.5757 11.1574 73.5517 10.784 72.229 10.784C71.0343 10.784 70.053 11.1787 69.285 11.968C68.517 12.736 68.101 13.6534 68.037 14.72ZM76.901 18.72L79.493 19.616C79.045 21.0454 78.213 22.2187 76.997 23.136C75.781 24.032 74.309 24.48 72.581 24.48C70.4263 24.48 68.5917 23.744 67.077 22.272C65.5837 20.7787 64.837 18.7734 64.837 16.256C64.837 13.9094 65.5623 11.968 67.013 10.432C68.4637 8.89603 70.1917 8.12803 72.197 8.12803C74.5223 8.12803 76.3357 8.86403 77.637 10.336C78.9383 11.7867 79.589 13.7387 79.589 16.192C79.589 16.576 79.5677 16.896 79.525 17.152H67.941C67.9623 18.5174 68.4103 19.6374 69.285 20.512C70.181 21.3867 71.2797 21.824 72.581 21.824C74.7783 21.824 76.2183 20.7894 76.901 18.72Z" fill="black"/>
                    <path d="M91.9445 8.60803H95.0485L99.0485 20.192L102.44 8.60803H105.609L100.617 24H97.5125L93.4165 12.288L89.4165 24H86.2485L81.1925 8.60803H84.4885L87.9445 20.192L91.9445 8.60803Z" fill="black"/>
                    <path d="M115.527 24.832L118.439 24.16C118.546 25.248 118.984 26.144 119.752 26.848C120.52 27.5734 121.48 27.936 122.632 27.936C125.768 27.936 127.336 26.272 127.336 22.944V20.736C126.952 21.4827 126.343 22.0907 125.511 22.56C124.701 23.0294 123.741 23.264 122.632 23.264C120.583 23.264 118.888 22.5707 117.544 21.184C116.221 19.776 115.56 17.984 115.56 15.808C115.56 13.696 116.221 11.9254 117.544 10.496C118.866 9.04537 120.562 8.32003 122.632 8.32003C124.978 8.32003 126.557 9.1307 127.368 10.752V8.60803H130.344V22.848C130.344 23.872 130.205 24.8214 129.928 25.696C129.672 26.592 129.256 27.4134 128.68 28.16C128.104 28.9067 127.293 29.4934 126.247 29.92C125.223 30.3467 124.018 30.56 122.632 30.56C120.733 30.56 119.122 30.016 117.799 28.928C116.477 27.8614 115.719 26.496 115.527 24.832ZM123.079 20.736C124.381 20.736 125.437 20.288 126.247 19.392C127.058 18.4747 127.464 17.28 127.464 15.808C127.464 14.336 127.058 13.152 126.247 12.256C125.437 11.3387 124.381 10.88 123.079 10.88C121.757 10.88 120.68 11.328 119.848 12.224C119.037 13.12 118.632 14.3147 118.632 15.808C118.632 17.3227 119.026 18.528 119.815 19.424C120.626 20.2987 121.714 20.736 123.079 20.736Z" fill="black"/>
                    <path d="M157.008 15.112V24.168H154V1H157.008V10.568C158.032 9.07467 159.589 8.328 161.68 8.328C163.451 8.328 164.805 8.89333 165.744 10.024C166.704 11.1547 167.184 12.616 167.184 14.408V24.168H164.176V14.92C164.176 12.3387 162.981 11.048 160.592 11.048C159.483 11.048 158.619 11.432 158 12.2C157.381 12.9467 157.051 13.9173 157.008 15.112Z" fill="black"/>
                    <path d="M171.009 20.04C171.009 18.7173 171.435 17.6613 172.289 16.872C173.142 16.0613 174.273 15.56 175.681 15.368L179.841 14.76C180.63 14.6533 181.025 14.2693 181.025 13.608C181.025 12.7973 180.747 12.136 180.193 11.624C179.638 11.112 178.806 10.856 177.697 10.856C176.673 10.856 175.862 11.144 175.265 11.72C174.667 12.2747 174.315 13.0213 174.209 13.96L171.329 13.288C171.478 11.816 172.15 10.6213 173.345 9.704C174.539 8.76533 175.969 8.296 177.633 8.296C179.809 8.296 181.419 8.82933 182.465 9.896C183.51 10.9413 184.033 12.2853 184.033 13.928V21.64C184.033 22.5573 184.097 23.4 184.225 24.168H181.281C181.174 23.528 181.121 22.8347 181.121 22.088C180.694 22.7707 180.065 23.368 179.233 23.88C178.422 24.392 177.398 24.648 176.161 24.648C174.646 24.648 173.409 24.2 172.449 23.304C171.489 22.3867 171.009 21.2987 171.009 20.04ZM176.577 22.12C177.921 22.12 178.998 21.7573 179.809 21.032C180.619 20.3067 181.025 19.1547 181.025 17.576V16.872L176.321 17.576C175.638 17.6827 175.094 17.928 174.689 18.312C174.283 18.696 174.081 19.2187 174.081 19.88C174.081 20.4773 174.305 21 174.753 21.448C175.222 21.896 175.83 22.12 176.577 22.12Z" fill="black"/>
                    <path d="M190.511 16.424C190.511 18.0453 190.905 19.368 191.695 20.392C192.505 21.416 193.615 21.928 195.023 21.928C196.367 21.928 197.444 21.4053 198.255 20.36C199.065 19.3147 199.471 17.9813 199.471 16.36C199.471 14.76 199.076 13.4693 198.287 12.488C197.497 11.5067 196.42 11.016 195.055 11.016C193.689 11.016 192.591 11.5173 191.759 12.52C190.927 13.5227 190.511 14.824 190.511 16.424ZM199.503 22.088V21.832C199.097 22.6213 198.479 23.2827 197.647 23.816C196.836 24.328 195.865 24.584 194.735 24.584C192.537 24.584 190.767 23.816 189.423 22.28C188.1 20.7227 187.439 18.7707 187.439 16.424C187.439 14.184 188.121 12.2853 189.487 10.728C190.852 9.14933 192.601 8.36 194.735 8.36C195.993 8.36 197.017 8.616 197.807 9.128C198.596 9.61867 199.14 10.2267 199.439 10.952V1H202.415V21.32C202.415 22.3653 202.468 23.3147 202.575 24.168H199.663C199.556 23.5707 199.503 22.8773 199.503 22.088Z" fill="black"/>
                    <path d="M209.323 16.424C209.323 18.0453 209.718 19.368 210.507 20.392C211.318 21.416 212.427 21.928 213.835 21.928C215.179 21.928 216.257 21.4053 217.067 20.36C217.878 19.3147 218.283 17.9813 218.283 16.36C218.283 14.76 217.889 13.4693 217.099 12.488C216.31 11.5067 215.233 11.016 213.867 11.016C212.502 11.016 211.403 11.5173 210.571 12.52C209.739 13.5227 209.323 14.824 209.323 16.424ZM218.315 22.088V21.832C217.91 22.6213 217.291 23.2827 216.459 23.816C215.649 24.328 214.678 24.584 213.547 24.584C211.35 24.584 209.579 23.816 208.235 22.28C206.913 20.7227 206.251 18.7707 206.251 16.424C206.251 14.184 206.934 12.2853 208.299 10.728C209.665 9.14933 211.414 8.36 213.547 8.36C214.806 8.36 215.83 8.616 216.619 9.128C217.409 9.61867 217.953 10.2267 218.251 10.952V1H221.227V21.32C221.227 22.3653 221.281 23.3147 221.387 24.168H218.475C218.369 23.5707 218.315 22.8773 218.315 22.088Z" fill="black"/>
                    <path d="M225.384 20.04C225.384 18.7173 225.81 17.6613 226.664 16.872C227.517 16.0613 228.648 15.56 230.056 15.368L234.216 14.76C235.005 14.6533 235.4 14.2693 235.4 13.608C235.4 12.7973 235.122 12.136 234.568 11.624C234.013 11.112 233.181 10.856 232.072 10.856C231.048 10.856 230.237 11.144 229.64 11.72C229.042 12.2747 228.69 13.0213 228.584 13.96L225.704 13.288C225.853 11.816 226.525 10.6213 227.72 9.704C228.914 8.76533 230.344 8.296 232.008 8.296C234.184 8.296 235.794 8.82933 236.84 9.896C237.885 10.9413 238.408 12.2853 238.408 13.928V21.64C238.408 22.5573 238.472 23.4 238.6 24.168H235.656C235.549 23.528 235.496 22.8347 235.496 22.088C235.069 22.7707 234.44 23.368 233.608 23.88C232.797 24.392 231.773 24.648 230.536 24.648C229.021 24.648 227.784 24.2 226.824 23.304C225.864 22.3867 225.384 21.2987 225.384 20.04ZM230.952 22.12C232.296 22.12 233.373 21.7573 234.184 21.032C234.994 20.3067 235.4 19.1547 235.4 17.576V16.872L230.696 17.576C230.013 17.6827 229.469 17.928 229.064 18.312C228.658 18.696 228.456 19.2187 228.456 19.88C228.456 20.4773 228.68 21 229.128 21.448C229.597 21.896 230.205 22.12 230.952 22.12Z" fill="black"/>
                    <path d="M244.886 16.424C244.886 18.0453 245.28 19.368 246.07 20.392C246.88 21.416 247.99 21.928 249.398 21.928C250.742 21.928 251.819 21.4053 252.63 20.36C253.44 19.3147 253.846 17.9813 253.846 16.36C253.846 14.76 253.451 13.4693 252.662 12.488C251.872 11.5067 250.795 11.016 249.43 11.016C248.064 11.016 246.966 11.5173 246.134 12.52C245.302 13.5227 244.886 14.824 244.886 16.424ZM253.878 22.088V21.832C253.472 22.6213 252.854 23.2827 252.022 23.816C251.211 24.328 250.24 24.584 249.11 24.584C246.912 24.584 245.142 23.816 243.798 22.28C242.475 20.7227 241.814 18.7707 241.814 16.424C241.814 14.184 242.496 12.2853 243.862 10.728C245.227 9.14933 246.976 8.36 249.11 8.36C250.368 8.36 251.392 8.616 252.182 9.128C252.971 9.61867 253.515 10.2267 253.814 10.952V1H256.79V21.32C256.79 22.3653 256.843 23.3147 256.95 24.168H254.038C253.931 23.5707 253.878 22.8773 253.878 22.088Z" fill="black"/>
                </svg>
            </Link>
        </li>
        <div className="nav-items">
            <p><a href="mailto:andrewghaddad@outlook.com">Email</a></p>
            <p><a href="AndrewHaddad_Resume3.docx" download="AndrewHaddad_Resume">Resume</a></p>
        </div>
    </div>
    </>
  );
}