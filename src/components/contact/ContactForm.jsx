import React, { useState } from 'react';
import { User, Phone, Building2, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can wire this up to an API / email service later
    setSubmitted(true);
  };

  const fields = [
    { name: 'name',    label: 'Your Name',        type: 'text',  icon: User,          placeholder: 'Full name', col: 'md:col-span-1' },
    { name: 'phone',   label: 'Phone Number',      type: 'tel',   icon: Phone,         placeholder: '+91 00000 00000', col: 'md:col-span-1' },
    { name: 'company', label: 'Company Name',      type: 'text',  icon: Building2,     placeholder: 'Your company / organisation', col: 'md:col-span-1' },
    { name: 'email',   label: 'Email Address',     type: 'email', icon: Mail,          placeholder: 'you@company.com', col: 'md:col-span-1' },
  ];

  return (
    <section className="section-screen bg-paper" id="contact-form">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left – heading */}
          <div className="lg:col-span-4">
            <span className="eyebrow">Trade Enquiry</span>
            <h2 className="display-md mt-6 text-cocoa">Send us your requirement.</h2>
            <p className="mt-6 text-lg text-cocoa/70 leading-relaxed">
              Fill in the form and the Shaarav trade desk will respond within 24 hours
              (Mon – Sat) with feasibility, sample plan, and a quote.
            </p>
            <div className="mt-10 space-y-4">
              {[
                'Product name & form (whole / powder / blend)',
                'Required quantity & pack size',
                'Destination port / country',
                'Target arrival window',
              ].map((hint) => (
                <div key={hint} className="flex items-start gap-3 text-sm text-cocoa/65">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  {hint}
                </div>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 border border-border bg-surface rounded-xl shadow-soft">
                <CheckCircle2 className="text-primary mb-6" size={52} />
                <h3 className="font-display text-3xl text-cocoa">Message received!</h3>
                <p className="mt-4 text-cocoa/65 max-w-sm">
                  Thank you. The Shaarav trade desk will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', company:'', email:'', message:'' }); }}
                  className="mt-8 text-sm text-primary hover:text-cocoa transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 2-col grid for the 4 short fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
                    <div key={name}>
                      <label htmlFor={name} className="block text-xs uppercase tracking-[0.25em] text-cocoa/55 mb-2">
                        {label}
                      </label>
                      <div className="relative">
                        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-cocoa/30 shrink-0" size={16} />
                        <input
                          id={name}
                          name={name}
                          type={type}
                          required
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full pl-10 pr-4 py-3.5 bg-surface border border-border text-cocoa placeholder:text-cocoa/30 focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message / Requirement – full width */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.25em] text-cocoa/55 mb-2">
                    Message / Requirement
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-cocoa/30 shrink-0" size={16} />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe the spice, grade, quantity, pack format, destination, and any other details..."
                      className="w-full pl-10 pr-4 py-3.5 bg-surface border border-border text-cocoa placeholder:text-cocoa/30 focus:outline-none focus:border-primary transition-colors font-sans text-sm resize-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-primary-foreground hover:bg-cocoa transition-colors font-medium"
                  >
                    Send Enquiry <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-cocoa/45 uppercase tracking-[0.2em]">
                    Reply within 24h · Mon – Sat
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
