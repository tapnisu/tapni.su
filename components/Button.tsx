import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="bg-gray-900 text-white m-4 p-4 rounded-full hover:bg-gray-800 transition-colors border-2 border-gray-800"
      type="button"
    />
  );
}
