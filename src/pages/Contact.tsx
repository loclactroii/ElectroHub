import { EmailIcon, TelephoneIcon } from "../components/Icons";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      <div className="mb-20 mt-20 flex items-center gap-3">
        <span className="text-sm opacity-50">Home</span>
        <span className="text-sm opacity-50">/</span>
        <span>Contact</span>
      </div>
      <div className="flex justify-between gap-8">
        <div className="mb-[8.75rem] inline-block min-w-[21.25rem] rounded p-[2.5rem_2.1875rem_3.1875rem_2.1875rem] shadow-[0_1px_13px_0_rgba(0,0,0,0.05)]">
          {/* Phone & Email  */}
          <div className="flex items-center gap-4">
            <TelephoneIcon />
            <span className="font-medium">Call To Us</span>
          </div>
          <p className="mt-6 text-sm">We are available 24/7, 7 days a week.</p>
          <p className="mt-4 text-sm">Phone: +84 0123 456 7890</p>
          <hr className="mb-8 mt-8" />
          <div className="flex items-center gap-4">
            <EmailIcon />
            <span className="font-medium">Write To Us</span>
          </div>
          <p className="mt-6 text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mt-4 text-sm">Emails: customer@exclusive.com</p>
          <p className="mt-4 text-sm">Emails: support@exclusive.com</p>
        </div>
        <div className="grow">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
