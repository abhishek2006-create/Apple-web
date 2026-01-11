import React from 'react';
import "../style/footer.css"; 

export default function Footer() {
  const directory = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories"]
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple Podcasts", "Apple Books", "App Store"]
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain"]
    }
  ];

  return (
    <footer className="apple-footer">
      <div className="footer-container">
        {/* Disclaimer Text */}
        <section className="footer-notes">
          <p>1. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit.</p>
          <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 000-800-040-1966.</p>
        </section>

        {/* Directory Grid */}
        <nav className="footer-directory">
          {directory.map((col, index) => (
            <div key={index} className="directory-column">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Legal Section */}
        <section className="footer-legal">
          <div className="legal-copyright">
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales Policy</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <div className="legal-location">
            <a href="https://www.instagram.com/2410_abhishek.01">
                <img src="https://simpleicons.org/icons/instagram.svg" style={{height: "18px"}}>
                </img>Abhishek Bariwa
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}