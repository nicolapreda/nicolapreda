import Link from "next/link";

export default function Footer() {
  const birthDate = new Date(2005, 4, 7);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (today < new Date(today.getFullYear(), 4, 7)) {
    age--;
  }

  return (
    <footer className="bg-black text-white px-8 sm:px-16 py-12 text-sm space-y-10 relative z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-2">
          <h3 className="font-bold uppercase tracking-widest">ABOUT</h3>
          <p className="text-gray-400 max-w-md">
            Ho {age} anni e amo intrecciare i fili delle mie storie con quelle degli altri per raccontarle attraverso la mia creatività.
            Nel mio lavoro fondo fotografia, video e direzione artistica per creare narrazioni visive potenti.
            La mia ambizione è lavorare su progetti che sfidano l'ordinario, portando un'estetica curata e un punto di vista personale.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold uppercase tracking-widest">SOCIAL</h3>
          <div className="flex flex-col gap-1">
            <a href="https://www.instagram.com/nicolapreda_/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Instagram</a>
            <a href="https://www.youtube.com/@nicolapreda" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Youtube</a>
            <a href="https://www.linkedin.com/in/nicola-preda-5b0722233/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
            <a href="https://wa.me/message/NCECJOBKRIRDO1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a>
            <a href="mailto:nicola.preda05@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Email</a>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold uppercase tracking-widest">NAVIGAZIONE</h3>
          <div className="flex flex-col gap-1">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/#chi-sono" className="hover:text-yellow-400 transition-colors">Chi Sono</Link>
            <Link href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</Link>
            <Link href="/contatti" className="hover:text-yellow-400 transition-colors">Contatti</Link>
            <a href="https://drive.predanicola.it" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Drive</a>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold uppercase tracking-widest">LEGAL</h3>
          <div className="flex flex-col gap-1 text-gray-500">
            <a href="https://www.iubenda.com/privacy-policy/88326651" className="hover:text-yellow-400 transition-colors" title="Privacy Policy">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/88326651/cookie-policy" className="hover:text-yellow-400 transition-colors" title="Cookie Policy">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-gray-500 pt-8 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} NICOLA PREDA. – All Rights Reserved</p>
        <p>Partita IVA: 04768450167</p>
      </div>
      
      {/* Iubenda Scripts could stay here or move to layout/component with Script tag */}
    </footer>
  );
}
