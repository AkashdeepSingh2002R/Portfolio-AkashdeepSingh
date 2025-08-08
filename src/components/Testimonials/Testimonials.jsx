import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "Akashdeep quickly turned our requirements into a working Angular app. Clear communication and fast iterations.",
    name: "Rohit Sharma",
    role: "Project Lead, Prime Plus",
    id: "d1",
    isDefault: true,
  },
  {
    quote:
      "Solid MEAN stack fundamentals. He delivered clean APIs and a responsive UI under a tight deadline.",
    name: "Navdeep K.",
    role: "Full-Stack Developer",
    id: "d2",
    isDefault: true,
  },
  {
    quote:
      "Great team player—writes tidy commits and keeps accessibility in mind.",
    name: "Priya S.",
    role: "Frontend Engineer",
    id: "d3",
    isDefault: true,
  },
];

const STORAGE_KEY = "akash_reviews_v1";

export default function Testimonials() {
  const [saved, setSaved] = useState([]); // user-added reviews
  const [form, setForm] = useState({ name: "", role: "", quote: "" });
  const [error, setError] = useState("");

  // Load saved reviews from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist whenever saved changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const role = form.role.trim();
    const quote = form.quote.trim();

    if (!name || !role || !quote) {
      setError("Please fill all fields.");
      return;
    }
    if (quote.length < 20) {
      setError("Review is too short. Please write at least 20 characters.");
      return;
    }

    const newReview = {
      id: `u_${Date.now()}`,
      name,
      role,
      quote,
      isDefault: false,
    };

    setSaved((prev) => [newReview, ...prev]);
    setForm({ name: "", role: "", quote: "" });
  };

  const removeSaved = (id) => {
    setSaved((prev) => prev.filter((r) => r.id !== id));
  };

  const all = [...saved, ...DEFAULT_TESTIMONIALS]; // user reviews appear first

  return (
    <section id="reviews" className="testimonials section">
      <h2 className="section-title">Reviews</h2>

      <div className="t-grid">
        {all.map((t) => (
          <blockquote className="t-card" key={t.id}>
            <p className="t-quote">“{t.quote}”</p>
            <footer className="t-meta">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </footer>

            {!t.isDefault && (
              <button
                className="t-delete"
                onClick={() => removeSaved(t.id)}
                aria-label="Delete review"
                title="Delete review"
              >
                ✕
              </button>
            )}
          </blockquote>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="t-form-wrap">
        <h3 className="t-form-title">Add a Review</h3>
        <form className="t-form" onSubmit={onSubmit}>
          <div className="t-form-row">
            <label>
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label>
              Role / Company
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                required
              />
            </label>
          </div>

          <label className="t-form-col">
            Review
            <textarea
              rows="4"
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
              placeholder="Share a brief, honest review…"
              required
            />
          </label>

          {error && <p className="t-error">{error}</p>}

          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>

        
      </div>
    </section>
  );
}
