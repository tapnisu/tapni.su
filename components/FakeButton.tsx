import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export function Button(props: Props) {
  return (
    <div
      disabled={!IS_BROWSER}
      className="bg-gray-900 text-white m-4 p-4 rounded-full hover:bg-gray-800 transition-colors border-2 border-gray-800"
    >
      {props.children}
    </div>
  );
}
