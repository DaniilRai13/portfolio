"use client";

import { useActionState, useId, type ComponentPropsWithRef } from "react";
import Image from "next/image";
import { CheckCheck, EllipsisVertical, LoaderCircle, Send } from "lucide-react";

import { sendContactMessage, type ContactFormState } from "@/app/actions/contact";
import photo from "../../../assets/photo.jpg";
import Alert from "@/components/ui/Alert";
import { siteConfig } from "@/data/site.data";

/** Состояние формы + отправленный текст, чтобы показать его «своим» сообщением */
type ChatState = ContactFormState & { sentText?: string };

const initialState: ChatState = { status: "idle" };

async function submitMessage(_prevState: ChatState, formData: FormData): Promise<ChatState> {
  const result = await sendContactMessage({ status: "idle" }, formData);
  if (result.status !== "success") return result;

  return { ...result, sentText: String(formData.get("message") ?? "").trim() };
}

const bubbleBase = "max-w-[85%] rounded-2xl border-[1.5px] border-ink px-4 py-2.5 text-[15px] leading-relaxed";
const incoming = `${bubbleBase} self-start rounded-tl-md bg-paper text-ink`;
const outgoing = `${bubbleBase} self-end whitespace-pre-line break-words rounded-tr-md bg-brand text-white`;

export default function ContactChat() {
  const [state, formAction, pending] = useActionState(submitMessage, initialState);
  const isSent = state.status === "success";

  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-panel border-2 border-ink bg-cream shadow-[10px_10px_0_var(--color-brand-soft)]">
      {/* Шапка «мессенджера» */}
      <div className="flex items-center gap-3 border-b-2 border-ink bg-paper px-4 py-3">
        <span className="relative size-10 shrink-0 overflow-hidden rounded-full border-[1.5px] border-ink">
          <Image src={photo} alt="" fill sizes="40px" className="object-cover object-[50%_25%]" />
        </span>
        <div className="min-w-0">
          <p className="font-bold text-ink">{siteConfig.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-mint-step" />
            online · replies within a day
          </p>
        </div>
        <EllipsisVertical size={20} aria-hidden="true" className="ml-auto text-muted" />
      </div>

      {/* Сообщения */}
      <div className="flex flex-col gap-2 bg-[radial-gradient(var(--color-line)_1px,transparent_1px)] bg-size-[18px_18px] px-4 py-6">
        <p aria-hidden="true" className="mx-auto mb-2 rounded-full bg-paper/80 px-3 py-0.5 text-xs font-bold text-muted">
          today
        </p>
        <p className={incoming}>Hi! I&apos;m Daniil 👋</p>
        <p className={incoming}>
          Tell me about your project, timeline and budget — a few sentences are enough.
        </p>
        <p className={incoming}>Or just send a link to your Figma or current website.</p>

        {/* Живой регион: скринридер прочитает ответ после отправки */}
        <div aria-live="polite" className="flex flex-col gap-2">
          {isSent && (
            <>
              {state.sentText && (
                <p className={outgoing}>
                  <span className="sr-only">Your message: </span>
                  <span className="line-clamp-6">{state.sentText}</span>
                  <span className="mt-1 flex justify-end">
                    <CheckCheck size={16} aria-hidden="true" className="text-brand-soft" />
                  </span>
                </p>
              )}
              <p className={incoming}>{state.message}</p>
            </>
          )}
        </div>
      </div>

      {/* Поле ввода */}
      {!isSent && (
        <form action={formAction} noValidate className="flex flex-col gap-2 border-t-2 border-ink bg-paper p-3">
          {state.status === "error" && state.message && (
            <Alert variant="error" className="mb-1">
              {state.message}
            </Alert>
          )}

          <div className="grid gap-2 sm:grid-cols-2">
            <ChatInput
              name="name"
              label="Name"
              placeholder="Your name"
              autoComplete="name"
              required
              maxLength={100}
              defaultValue={state.values?.name}
              error={state.errors?.name}
            />
            <ChatInput
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
          </div>

          <ChatMessage defaultValue={state.values?.message} error={state.errors?.message} pending={pending} />

          {/* Honeypot для ботов: скрыт от людей и скринридеров */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
        </form>
      )}
    </div>
  );
}

type ChatInputProps = ComponentPropsWithRef<"input"> & { label: string; error?: string };

function ChatInput({ label, error, ...props }: ChatInputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        {...props}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="field rounded-full py-2.5"
      />
      {error && (
        <p id={errorId} className="mt-1 px-4 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

function ChatMessage({
  defaultValue,
  error,
  pending,
}: {
  defaultValue?: string;
  error?: string;
  pending: boolean;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="flex items-end gap-2">
        <label htmlFor={id} className="sr-only">
          Message
        </label>
        <textarea
          id={id}
          name="message"
          rows={2}
          required
          maxLength={3000}
          placeholder="Message…"
          defaultValue={defaultValue}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="field max-h-48 min-h-11 resize-none rounded-[22px] py-2.5 field-sizing-content"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label={pending ? "Sending…" : "Send message"}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-brand text-white transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none motion-reduce:transition-none"
        >
          {pending ? (
            <LoaderCircle size={18} aria-hidden="true" className="animate-spin motion-reduce:animate-none" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
        </button>
      </div>
      {error && (
        <p id={errorId} className="mt-1 px-4 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
