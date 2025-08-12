"use client";

import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Booking request sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send booking request.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className=" mx-auto md:py-50 py-25 bg-gray-100 ">
        <div className=" md:max-w-3xl mx-auto md:bg-white rounded-xl md:shadow-md md:p-20 p-10 ">
      <h1 className="text-3xl font-bold mb-4 text-green-900 text-center mb-10">Book Now</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded mb-6"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded mb-6"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
        />
        <textarea
          name="message"
          placeholder="Booking Details"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-6"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500"
        >
          Send Booking Request
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
    </section>
  );
}
