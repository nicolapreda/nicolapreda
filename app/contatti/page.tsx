import ContactList from "../../components/ContactList";
import { metadata as layoutMetadata } from "../layout";

export const metadata = {
  title: "CONTATTI - NICOLA PREDA",
  description: "Contatta Nicola Preda per collaborazioni, preventivi o informazioni. Realizziamo insieme il tuo prossimo progetto video o foto.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "CONTATTI - NICOLA PREDA",
    description: "Contatta Nicola Preda per collaborazioni, preventivi o informazioni. Realizziamo insieme il tuo prossimo progetto video o foto.",
    images: ["https://www.predanicola.it/assets/profile.jpg"],
  },
};

export default function ContattiPage() {
  return <ContactList />;
}
