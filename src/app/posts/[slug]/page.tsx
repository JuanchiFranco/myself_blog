import { getPostData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <main className="max-w-3xl mx-auto px-6 py-20">
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

        <article className="glass-card rounded-3xl p-8 md:p-12">
          <header className="mb-12 border-b border-zinc-800/50 pb-8">
            <div className="flex items-center text-sm font-semibold text-blue-400 mb-4 tracking-wider uppercase">
              <time dateTime={postData.date}>
                {format(parseISO(postData.date), "d 'de' MMMM, yyyy", { locale: es })}
              </time>
              {postData.author && (
                <>
                  <span className="mx-2 text-zinc-600">•</span>
                  <span>Por {postData.author}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 leading-tight">
              {postData.title}
            </h1>
          </header>

          <div 
            className="prose prose-lg prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-zinc-100 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-zinc-100 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:text-zinc-300 prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
          />
        </article>
      </main>
    </div>
  );
}
