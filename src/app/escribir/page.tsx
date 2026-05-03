import Link from 'next/link';

export const metadata = {
  title: 'Escribe tu pensamiento',
  description: 'Comparte tus ideas y reflexiones con la comunidad.',
};

export default function EscribirPage() {
  // Usando Formspree configurado mediante variable de entorno
  const formActionUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || "";

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <main className="max-w-2xl mx-auto px-6 py-20">
        <nav className="mb-12">
          <Link 
            href="/" 
            className="group inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-400 bg-zinc-900/50 hover:bg-zinc-800/80 hover:text-zinc-100 rounded-full transition-all duration-300 border border-zinc-800 backdrop-blur-md"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </nav>

        <header className="mb-10 border-b border-zinc-800/50 pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 leading-tight">
            Escribe tu pensamiento
          </h1>
          <p className="text-lg text-zinc-400">
            Comparte tus reflexiones. Una vez enviado, el contenido será revisado antes de publicarse en la portada.
          </p>
        </header>

        <div className="glass-card rounded-3xl p-8 md:p-10">
          <form action={formActionUrl} method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-zinc-300">
                  Tu Nombre (o seudónimo)
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Ej. Anónimo"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-zinc-300">
                  Tu Correo (no se publicará)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Para poder contactarte"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50">
              <input
                type="checkbox"
                name="autorizar_nombre"
                id="autorizar_nombre"
                value="Sí, publicar con mi nombre"
                className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-zinc-900 cursor-pointer accent-blue-600"
              />
              <label htmlFor="autorizar_nombre" className="text-sm font-medium text-zinc-300 cursor-pointer">
                Quiero que mi nombre (o seudónimo) aparezca públicamente como el autor de este pensamiento. <span className="text-zinc-500 font-normal block mt-1">Si no lo marcas, el post se publicará como "Anónimo".</span>
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-semibold text-zinc-300">
                Título del pensamiento
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="Un título atractivo..."
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-zinc-300">
                Tu Pensamiento
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={8}
                placeholder="Escribe aquí lo que tienes en mente..."
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors duration-300 shadow-lg shadow-blue-500/20 flex justify-center items-center group cursor-pointer"
            >
              Enviar Pensamiento
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
