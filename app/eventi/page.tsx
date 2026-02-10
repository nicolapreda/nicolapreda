import Link from "next/link";
import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";
import EventiClient from "../../components/EventiClient";

export const metadata = {
  title: "EVENTI - NICOLA PREDA",
  description: "Reportage di Eventi e Nightlife a Milano. Video aftermovie e foto che catturano l'energia della serata.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "EVENTI - NICOLA PREDA",
    description: "Reportage di Eventi e Nightlife a Milano. Video aftermovie e foto che catturano l'energia della serata.",
    images: ["https://www.predanicola.it/assets/eventi/GLUE-71.jpg"],
  },
};

export default function EventiPage() {
  return (
    <>
      <EventiClient />
    </>
  );
}
