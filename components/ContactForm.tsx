"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/legal";
import { SITE } from "@/lib/content";

const ENQUIRY_TYPES = [
  "General question",
  "Report a calculation issue",
  "Feature suggestion",
  "Privacy enquiry",
  "Business / advertising",
  "Other",
] as const;

type FormStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState<string>(ENQUIRY_TYPES[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypot) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `[${SITE.name}] ${enquiryType} — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry type: ${enquiryType}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <div className="contact-form-wrap">
      {status === "success" ? (
        <div className="contact-form__success" role="status">
          <span className="contact-form__success-icon" aria-hidden="true">✓</span>
          <h3>Message ready to send</h3>
          <p>
            Your email app should open with your message pre-filled. If it
            didn&apos;t, email us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__grid">
            <div className="tool-field">
              <label className="asc-label" htmlFor="contact-name">
                Full name <span className="contact-form__required">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                className="asc-input asc-input--no-prefix contact-form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

            <div className="tool-field">
              <label className="asc-label" htmlFor="contact-email">
                Email address <span className="contact-form__required">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                className="asc-input asc-input--no-prefix contact-form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="tool-field">
            <label className="asc-label" htmlFor="contact-type">
              Enquiry type
            </label>
            <select
              id="contact-type"
              className="asc-select contact-form__input"
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
            >
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="tool-field">
            <label className="asc-label" htmlFor="contact-message">
              Message <span className="contact-form__required">*</span>
            </label>
            <textarea
              id="contact-message"
              className="contact-form__textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help…"
              rows={6}
              required
            />
          </div>

          {/* Honeypot — hidden from users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="contact-form__honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {status === "error" && (
            <p className="contact-form__error" role="alert">
              Please fill in all required fields before submitting.
            </p>
          )}

          <button type="submit" className="btn btn--primary contact-form__submit">
            Send message
          </button>

          <p className="contact-form__note">
            By submitting this form, you agree that we may use your details to
            respond to your enquiry. See our{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </form>
      )}
    </div>
  );
}
