import { redirect } from "@remix-run/node";

export const loader = async () => redirect("mailto:aleksei@tapni.su");
