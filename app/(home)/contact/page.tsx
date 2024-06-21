"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { TbArrowRight } from "react-icons/tb";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {" "}
            <div className="mt-2.5">
              <Input type="name" id="firstname" placeholder="First Name" />
            </div>
            <div className="mt-2.5">
              <Input type="name" id="lastname" placeholder="Last Name" />
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="name" id="Company" placeholder="Company" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Textarea placeholder="Type Your Message Here..." />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Switch.Group
                as="div"
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={`${
                      agreed ? "bg-primary" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out`}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        agreed ? "translate-x-5" : "translate-x-0"
                      } inline-block h-4 w-4 transform bg-white rounded-full shadow ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  <Switch.Label className="ml-3 text-sm leading-6 text-gray-600">
                    Agree to policies
                  </Switch.Label>
                </div>
                <Switch.Description className="text-sm text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-primary">
                    privacy policy
                  </a>
                </Switch.Description>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <Button
                type="submit"
                className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-500 ring-offset-2"
              >
                Let's Talk <TbArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
      </form>
    </div>
  );
}
