import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export function Button(props: Props) {
  return (
    <div
      disabled={!IS_BROWSER}
      className="text-black bg-white dark:bg-gray-900 dark:text-white hover:bg-indigo-100 hover:bg-indigo-100 dark:hover:bg-gray-800 m-4 p-4 rounded-full border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-gray-700 transition-colors border-2"
    >
      {props.children}
    </div>
  );
}
