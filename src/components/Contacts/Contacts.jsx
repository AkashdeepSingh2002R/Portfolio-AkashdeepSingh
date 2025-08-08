import React, { useState } from "react";
import "./Contacts.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const to = "youremail@example.com"; // TODO: replace
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input
              type="text" required
              value={form.name}
              onChange={(e)=>setForm({...form, name:e.target.value})}
            />
          </label>
          <label>
            Email
            <input
              type="email" required
              value={form.email}
              onChange={(e)=>setForm({...form, email:e.target.value})}
            />
          </label>
          <label>
            Message
            <textarea
              rows="5" required
              value={form.message}
              onChange={(e)=>setForm({...form, message:e.target.value})}
            />
          </label>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="contact-side">
          <p>Prefer email or social?</p>
          <ul className="contact-links">
            <li><a href="mailto:youremail@example.com">📧 Email</a></li>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noreferrer">💻 GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
