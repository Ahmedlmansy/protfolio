import type { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(100, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  message: z.string().trim().min(10, "Please add a little more detail (at least 10 characters).").max(5000, "Message is too long."),
});

type ContactFields = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full rounded-lg border border-border bg-surface-low px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export default function Contact() {
  const motionPresets = useMotionPresets();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>();

  const submitEmail = async (submittedForm: HTMLFormElement) => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        submittedForm,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      const errorMessage =
        error && typeof error === "object" && "text" in error && typeof error.text === "string"
          ? error.text
          : error instanceof Error
            ? error.message
            : "Please try again.";
      toast.error(`Failed to send email: ${errorMessage}`);
    }
  };

  const nameField = register("name", {
    validate: (value) => contactSchema.shape.name.safeParse(value).success || "Please enter a name between 2 and 100 characters.",
  });
  const emailField = register("email", {
    validate: (value) => contactSchema.shape.email.safeParse(value).success || "Enter a valid email address.",
  });
  const messageField = register("message", {
    validate: (value) => contactSchema.shape.message.safeParse(value).success || "Message must be between 10 and 5000 characters.",
  });
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const submittedForm = event.currentTarget;
    void handleSubmit(() => submitEmail(submittedForm))(event);
  };

  return (
    <section id="contact" className="section-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={motionPresets.staggerContainer}
        className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-low via-surface-container to-surface-lowest p-5 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div variants={motionPresets.staggerContainer} className="flex flex-col items-start lg:col-span-5">
            <motion.span
              variants={motionPresets.staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-wider text-tertiary"
            >
              <span className="size-1.5 rounded-full bg-tertiary" />
              Available for opportunities
            </motion.span>
            <motion.p variants={motionPresets.staggerItem} className="eyebrow mt-7">
              Have a project in mind?
            </motion.p>
            <motion.h2
              variants={motionPresets.staggerItem}
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl"
            >
              {site.contactHeading}
            </motion.h2>
            <motion.p variants={motionPresets.staggerItem} className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {site.contactPrompt}
            </motion.p>

            <motion.a
              variants={motionPresets.staggerItem}
              href={`mailto:${site.email}`}
              className="mt-7 inline-flex max-w-full items-center gap-3 rounded-xl border border-border bg-surface-lowest px-4 py-3 transition-colors hover:border-primary/30"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-light">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[0.58rem] uppercase tracking-wider text-muted-foreground">Email me</span>
                <span className="block truncate text-sm font-medium text-foreground">{site.email}</span>
              </span>
              <ArrowUpRight size={16} className="shrink-0 text-muted-foreground" aria-hidden="true" />
            </motion.a>

            <motion.a
              variants={motionPresets.staggerItem}
              href={site.cvUrl}
              download
              className="mt-3 inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileDown size={16} aria-hidden="true" />
              Download CV
            </motion.a>

            <motion.div variants={motionPresets.staggerItem} className="mt-7 flex items-center gap-3">
              <span className="font-mono text-[0.58rem] uppercase tracking-wider text-muted-foreground">Connect</span>
              <span className="h-px w-8 bg-border" />
              {socials
                .filter(({ name }) => name in socialIcons)
                .map(({ name, href }) => {
                  const Icon = socialIcons[name as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      whileHover={motionPresets.hoverLift}
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-low text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </motion.a>
                  );
                })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={motionPresets.staggerItem}
            className="rounded-xl border border-border bg-surface-lowest/90 p-5 shadow-lg sm:p-7 lg:col-span-7"
          >
            <div className="mb-6">
              <p className="eyebrow mb-2">Send a message</p>
              <h3 className="font-display text-xl font-semibold text-foreground">Start a conversation</h3>
            </div>
            <form onSubmit={onFormSubmit} noValidate>
              <input type="hidden" name="title" value="Portfolio Contact Form" />
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              <motion.div variants={motionPresets.staggerContainer} className="space-y-5">
                <motion.div variants={motionPresets.staggerItem}>
                  <label htmlFor="contact-name" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <input
                    {...nameField}
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name && <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
                </motion.div>

                <motion.div variants={motionPresets.staggerItem}>
                  <label htmlFor="contact-email" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    {...emailField}
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email && <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
                </motion.div>

                <motion.div variants={motionPresets.staggerItem}>
                  <label htmlFor="contact-message" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    {...messageField}
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className={`${fieldClass} min-h-32 resize-y`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={motionPresets.staggerItem}
                  whileHover={motionPresets.reduceMotion || isSubmitting ? undefined : { y: -2 }}
                  whileTap={motionPresets.tapPress}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-colors hover:bg-primary-light disabled:cursor-wait disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send size={16} aria-hidden="true" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
