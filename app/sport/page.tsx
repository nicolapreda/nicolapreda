import { metadata as layoutMetadata } from "../layout";
import SportClient from "../../components/SportClient";

export const metadata = {
  title: "SPORT - NICOLA PREDA",
  description: "Fotografia e Video Sportivi. Il racconto della competizione, dal progetto Galacticos alle collaborazioni con club professionistici.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "SPORT - NICOLA PREDA",
    description: "Fotografia e Video Sportivi. Il racconto della competizione, dal progetto Galacticos alle collaborazioni con club professionistici.",
    images: ["https://www.predanicola.it/assets/galacticos_1.png"],
  },
};

export default function SportPage() {
  return (
    <>
      <SportClient />
    </>
  );
}
