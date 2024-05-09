import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 text-sm font-normal text-center text-white bg-dark_blue">
      <p>
        Copyright © 2024 - All right reserved by{" "}
        <a
          href="https://adnandev.netlify.app"
          rel="noreferrer"
          target="_blank"
          without
          className="no-underline capitalize text-green"
        >
          Adnan Tariq
        </a>
      </p>
    </footer>
  );
}
