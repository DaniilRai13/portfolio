"use client";

import { useActionState } from "react";

import { sendContactMessage, type ContactFormState } from "@/app/actions/contact";
import Alert from "@/components/ui/Alert";
import Button, { ButtonArrow } from "@/components/ui/Button";
import Field, { TextArea } from "@/components/ui/Field";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return <Alert variant="success">{state.message}</Alert>;
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-4">
      <Field
        name="name"
        label="Name"
        placeholder="Your name"
        autoComplete="name"
        required
        maxLength={100}
        defaultValue={state.values?.name}
        error={state.errors?.name}
      />

      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        maxLength={200}
        defaultValue={state.values?.email}
        error={state.errors?.email}
      />

      <TextArea
        name="message"
        label="Message"
        rows={4}
        placeholder="A few words about your project, timeline and budget"
        required
        maxLength={3000}
        defaultValue={state.values?.message}
        error={state.errors?.message}
      />

      {/* Honeypot для ботов: скрыт от людей и скринридеров */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <Alert variant="error">{state.message}</Alert>
      )}

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Sending…" : "Send message"}
        {!pending && <ButtonArrow />}
      </Button>
    </form>
  );
}
