import React from "react";

export default function SupportPage() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      <h2>App Support Overview</h2>
      <p>
        Our fitness app offers robust support for key health and training features to help you achieve 
        your wellness goals. If you have questions about specific features or services, see the lists 
        below or reach out to our team.
      </p>

      <h3>Supported:</h3>
      <p>
        The app currently supports activity tracking, workout logging, goal setting, performance 
        analytics, and device integration with most popular fitness trackers and smartwatches.
      </p>

      <h3>Don’t Support:</h3>
      <p>
        We do not currently offer meal tracking (no manual or automated food/calorie logging), live 
        personal coaching (no direct real‑time guidance or one‑on‑one remote trainers), or supplement 
        integration (no tracking, suggesting, or logging of nutritional supplements or third‑party 
        supplement apps). We are constantly expanding our features and welcome your feedback.
      </p>

      <form
        action="#"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "30px"
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Your message..."
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: "black",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
