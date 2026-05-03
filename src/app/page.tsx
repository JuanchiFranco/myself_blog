import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-16 flex flex-col md:flex-row md:items-center gap-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-zinc-800 shadow-xl">
            <Image 
              src="/avatar.png" 
              alt="Avatar" 
              fill
              sizes="(max-width: 768px) 100vw, 96px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Ecos de Tinta
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mb-6">
              Un espacio colectivo para documentar ideas, reflexiones y aprendizajes. Únete y comparte tu voz.
            </p>
            <Link 
              href="/escribir" 
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-zinc-100 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/20"
            >
              Escribe tu pensamiento
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </Link>
          </div>
        </header>

        <section>
          <div className="space-y-6">
            {allPostsData.map(({ slug, date, title, description, category }) => (
              <Link href={`/posts/${slug}`} key={slug} className="block group outline-none">
                <article className="glass-card rounded-2xl p-6 transition-all duration-300 transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    {category && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full tracking-wider uppercase">
                        {category}
                      </span>
                    )}
                    <time dateTime={date} className="text-xs font-semibold text-zinc-500 tracking-wider uppercase block">
                      {format(parseISO(date), "d 'de' MMMM, yyyy", { locale: es })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors mb-2">
                    {title}
                  </h2>
                  {description && (
                    <p className="text-zinc-400 leading-relaxed">
                      {description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-500 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Leer artículo 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
