import React, { useEffect } from "react";

export default function DevfolioButton() {
  useEffect(() => {
    if (document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug="aurex26"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    />
  );
}
