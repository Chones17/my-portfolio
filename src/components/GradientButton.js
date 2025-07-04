import { Button } from "@headlessui/react";

export default function GradientButton({ value }) {
  return (
    <Button className="rounded-lg px-6 text-sm h-10 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white data-hover:from-cyan-500 data-hover:to-cyan-700 data-hover:data-active:from-cyan-700">
      {value}
    </Button>
  );
}
