import React from "react";

export default function Footer() {
  return (
    <footer className=" text-center w-full py-4 bg-dark_blue text-white text-sm font-normal">
      <p>
        Copyright © 2024 - All right reserved{" "}
        <a
          href="https://adnandev.netlify.app"
          rel="noreferrer"
          target="_blank"
          without
          className=" no-underline text-green capitalize "
        >
          Adnan Tariq
        </a>
      </p>
    </footer>
  );
}
