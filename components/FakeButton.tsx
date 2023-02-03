import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export function Button(props: Props) {
  return (
    <div
      disabled={!IS_BROWSER}
      className="bg-white text-black m-4 p-4 rounded-full hover:bg-gray-300 transition-colors"
    >
      {props.children}
    </div>
  );
}
