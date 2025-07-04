import { Button } from "@headlessui/react";

export default function GreyedButton({ value }) {
  return (
    <Button className="rounded-lg px-6 text-sm h-10 border-2 border-stone-400 text-stone-400 data-hover:border-stone-200 data-hover:data-active:text-stone-300">
      {value}
    </Button>
  );
}
