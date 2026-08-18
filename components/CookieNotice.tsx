"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "all" | "essential";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (!choice) setVisible(true);
  }, []);

  function saveChoice(choice: ConsentChoice) {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label="Cookie consent">
      <div className="cookie-notice__inner site-container">
        <p>
          We use essential cookies so the site works. With your permission, we
          may also use cookies for Google AdSense ads and basic analytics. Read
          our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-of-use">Terms of Use</Link>.
        </p>
        <div className="cookie-notice__actions">
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => saveChoice("essential")}
          >
            Essential only
          </button>
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => saveChoice("all")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
