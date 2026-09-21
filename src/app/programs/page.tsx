import { redirect } from "next/navigation";

/** The programmes section now lives on its own route. */
export default function ProgramsRedirect() {
  redirect("/programmes");
}
