import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import GradientButton from "@/components/GradientButton";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Value", href: "#", current: false },
  { name: "About Me", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Contact Me", href: "#", current: false },
];

export default function Navigation() {
  return (
    <Disclosure as="nav">
      <div className="flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <DisclosureButton className="group p-2 hover:text-stone-100">
            <span className="sr-only">Open main menu</span>
            <Bars3CenterLeftIcon
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>
        {/* Logo home link */}
        <div className="shrink-0">
          <img
            alt="Travis Stirling Logo"
            src="/portfolio-logo.png"
            className="h-14 w-auto"
          />
        </div>
        {/* Main navigation */}
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={
                item.current
                  ? "text-cyan-400 hover:text-cyan-600 p-3"
                  : "hover:text-cyan-400 p-3"
              }
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Call to Action */}
        <div className="flex items-center justify-end p-2">
          <GradientButton value={"Hire Me"} />
        </div>
      </div>
      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={
                item.current
                  ? "text-cyan-400 hover:text-cyan-600 block p-3"
                  : "hover:text-cyan-400 block p-3"
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
