import React from "react";

export default function Footer(){
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currentyear}</p>
    </footer>
  )
}