'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '@/content/contact';
import { TREATMENTS } from '@/content/treatments';
import { CONTATO_PAGE } from '@/content/contato-page';

export function ContatoForm() {
  const { form } = CONTATO_PAGE;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const treatmentName =
      treatment && treatment !== 'undecided'
        ? TREATMENTS.find((t) => t.slug === treatment)?.name ?? treatment
        : 'ainda estou decidindo';

    const composed =
      `Ol\u00e1! Sou ${name.trim()}.\n\n` +
      `Tratamento de interesse: ${treatmentName}.\n\n` +
      `${message.trim()}\n\n` +
      (phone.trim() ? `Meu WhatsApp para retorno: ${phone.trim()}` : '');

    const url = `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp.raw}&text=${encodeURIComponent(composed)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const fieldClass =
    'w-full bg-transparent border-b border-marmorino-light/50 py-3 px-1 font-body text-[15px] text-charcoal placeholder:text-marmorino-light/80 focus:border-bronze focus:outline-none transition-colors duration-300';
  const labelClass = 'block font-body text-[13px] text-marmorino mb-2 tracking-[0.02em]';

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div>
        <label htmlFor="contato-name" className={labelClass}>
          {form.fields.name.label}
        </label>
        <input
          id="contato-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={form.fields.name.placeholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contato-phone" className={labelClass}>
          {form.fields.phone.label}
        </label>
        <input
          id="contato-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={form.fields.phone.placeholder}
          className={fieldClass}
        />
        <p className="mt-2 font-body text-[12px] text-marmorino/80">
          {form.fields.phone.hint}
        </p>
      </div>

      <div>
        <label htmlFor="contato-treatment" className={labelClass}>
          {form.fields.treatment.label}
        </label>
        <select
          id="contato-treatment"
          name="treatment"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className={`${fieldClass} cursor-pointer appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M2 4l4 4 4-4' stroke='%238E8F91' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>")] bg-no-repeat bg-[right_4px_center] pr-7`}
        >
          <option value="">{form.fields.treatment.placeholder}</option>
          <option value="undecided">{form.fields.treatment.defaultLabel}</option>
          {TREATMENTS.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contato-message" className={labelClass}>
          {form.fields.message.label}
        </label>
        <textarea
          id="contato-message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={form.fields.message.placeholder}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!name.trim() || !message.trim()}
          className="group inline-flex items-center gap-2 bg-bronze hover:bg-bronze-dark disabled:bg-marmorino-light/60 disabled:cursor-not-allowed text-pure font-body font-medium text-[15px] tracking-tight px-7 py-3.5 rounded-full transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
        >
          {form.submitLabel}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1 group-disabled:translate-x-0" strokeWidth={1.5} />
        </button>
        <p className="mt-4 font-body italic text-[12px] text-marmorino max-w-md leading-relaxed">
          {form.privacy}
        </p>
      </div>
    </form>
  );
}
