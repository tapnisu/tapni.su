import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="bg-white text-black m-4 p-4 rounded-full hover:bg-gray-300 transition-colors"
      type="button"
    />
  );
}
