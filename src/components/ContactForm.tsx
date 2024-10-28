import { Button } from "./PrimaryButton";

export const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 rounded p-[2.5rem_2rem] shadow-[0_1px_13px_0_rgba(0,0,0,0.05)]">
      <div className="flex gap-4">
        <input
          className="h-[3.125rem] rounded bg-secondary p-[0_1rem]"
          type="text"
          placeholder="Your Name *"
          required
        />
        <input
          className="h-[3.125rem] rounded bg-secondary p-[0_1rem]"
          type="text"
          placeholder="Your Name *"
          required
        />
        <input
          className="h-[3.125rem] rounded bg-secondary p-[0_1rem]"
          type="text"
          placeholder="Your Name *"
          required
        />
      </div>
      <div>
        <textarea
          className="min-h-[12.9375rem] w-full bg-secondary p-4"
          placeholder="Your Message"
          name=""
          id=""
        ></textarea>
      </div>
      <div className="inline-block text-end">
        <Button background="red" content="Send Message" />
      </div>
    </div>
  );
};
