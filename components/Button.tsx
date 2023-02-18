import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="text-black bg-white dark:bg-gray-900 dark:text-white hover:bg-indigo-100 hover:bg-indigo-100 dark:hover:bg-gray-800 m-4 p-4 rounded-full border-gray-300 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-gray-700 transition-colors border-2"
      type="button"
    />
  );
}
