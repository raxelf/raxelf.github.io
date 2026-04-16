import FormInput from "@/components/ui/FormInput";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="bg-primary rounded-xl p-6 md:p-8 flex flex-col gap-4">
        <h2 className="font-bold text-3xl md:text-4xl text-background">
          Start a Conversation.
        </h2>

        <p className="text-gray-300 text-md md:text-lg text-justify my-4">
          Whether you have a project in mind or just want to discuss, my inbox
          is always open.
        </p>

        {/* form */}
        <form className="flex flex-col gap-6">
          <FormInput
            label="Your Fullname"
            placeholder="John Doe"
            inputType="text"
          />

          <FormInput
            label="Your Email"
            placeholder="name@example.com"
            inputType="text"
          />

          <FormInput
            label="Message"
            placeholder="Hello, I'd like to talk about..."
            inputType="textarea"
          />

          <button
            className="w-full rounded-lg text-primary bg-background py-3 px-4 font-semibold
            text-sm md:text-md cursor-pointer hover:bg-background/85 delay-75 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
