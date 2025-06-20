import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "About Me", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Contact Me", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav">
      <div className="px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-stone-300 hover:bg-neutral-800 hover:text-white">
              <span className="absolute -inset-0.5" />
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
          <div className="flex shrink-0 items-center justify-center md:justify-start">
            <img
              alt="Travis Stirling"
              src="/portfolio-logo.png"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-cyan-400 hover:text-cyan-500"
                    : "text-stone-300 hover:text-cyan-500",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <Button className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 text-sm text-white data-hover:from-cyan-500 data-hover:to-cyan-700 data-hover:data-active:from-cyan-700">
              Hire Me
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="bg-stone-900 px-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-cyan-400 hover:text-cyan-500"
                  : "text-stone-300 hover:text-cyan-500",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
