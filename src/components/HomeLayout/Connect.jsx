import { Divider, Button, InputIcon, Input, Label, Textarea } from "keep-react";

const Connect = () => {
  return (
    <div className=" px-[8%] lg:px-[12%] flex flex-col lg:flex-row justify-between gap-20 py-20">
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl lg:text-4xl font-bold text-metal-800 ">
          Connect with Me
        </h3>
        <Divider color="error" className="my-6 lg:mr-10" />
        <p className="text-metal-700">
          Have a question about tutors or our services? Drop us a message, and
          we’ll be happy to assist you in every step of your learning journey.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <fieldset className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <Input className="border-none" />
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input className="border-none" />
          </div>
        </fieldset>

        <fieldset className="space-y-1.5 ">
          <Label htmlFor="message">Your message*</Label>
          <Textarea id="message" rows={2} className="w-full" />
        </fieldset>
        <Button color="error" className="w-full mt-2">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Connect;
