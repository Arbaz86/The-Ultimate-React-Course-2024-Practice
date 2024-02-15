import React from "react";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const operHour = 12;
  const closeHour = 22;
  const isOpen = hour >= operHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} operHour={operHour} />
      ) : (
        <p>
          We're happy to welcome you between {operHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
