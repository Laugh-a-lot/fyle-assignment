import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light" style={{ background: "#FF3147" }}>
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="/"
            style={{ color: "white", fontSize: "32px" }}
          >
            Fyle Assignment
          </a>
          <h3 style={{ color: "white" }}>
            {" "}
            Hello Fyle Team! Hoping to join you guys soon...
          </h3>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
