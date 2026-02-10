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
  return (
    <>
      <section className="bg-primary flex flex-col justify-center items-center py-32 px-4 sm:px-8 overflow-hidden relative pb-0">
         <div className="relative z-10 text-center mb-16">
            <h1 className="text-[12vw] sm:text-[8vw] leading-none font-black tracking-tight text-white uppercase">
                PARLIAMONE
            </h1>
            <p className="text-xl sm:text-2xl text-white opacity-80 mt-4 font-medium tracking-wider uppercase">
                Hai un'idea? Realizziamola.
            </p>
        </div>
      </section>
      <ContactList />
    </>
  );
}
