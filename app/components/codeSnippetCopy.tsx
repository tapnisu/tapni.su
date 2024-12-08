import { Copy } from "lucide-react";

import "./codeSnippetCopy.css";
import clsx from "clsx";

interface CodeSnippetCopyProps extends React.HTMLAttributes<HTMLSpanElement> {
  "text-to-copy": string;
}

export function CodeSnippetCopy(props: CodeSnippetCopyProps) {
  return (
    <span className={clsx("code-snippet-copy", props.className)} {...props}>
      <code>{props.children}</code>
      <Copy
        width={16}
        height={16}
        onClick={() => {
          navigator.clipboard.writeText(props["text-to-copy"]);
        }}
        className="code-snippet-copy__icon"
      />
    </span>
  );
}
