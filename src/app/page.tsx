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
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Mis Pensamientos
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl">
              Un espacio personal para documentar ideas, reflexiones y aprendizajes. Explorando conceptos, un post a la vez.
            </p>
          </div>
        </header>

        <section>
          <div className="space-y-6">
            {allPostsData.map(({ slug, date, title, description }) => (
              <Link href={`/posts/${slug}`} key={slug} className="block group outline-none">
                <article className="glass-card rounded-2xl p-6 transition-all duration-300 transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                  <time dateTime={date} className="text-xs font-semibold text-blue-400 mb-2 tracking-wider uppercase block">
                    {format(parseISO(date), "d 'de' MMMM, yyyy", { locale: es })}
                  </time>
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
