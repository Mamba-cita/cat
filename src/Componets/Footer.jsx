import React from "react";

function Footer() {
  const today = new Date();
  return (
    <>
      <footer>
        <p>
          Copyright &copy; {today.getFullYear()} Edd development. All rights
          reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
