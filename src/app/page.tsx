import { fetchHomePage } from '@/services/api';
import { ContentItem, HeroCta, Section } from '@/types/home';

export default async function Home() {
  const data = await fetchHomePage();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">{data.title}</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{data.introduction}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              {data.hero_cta.map((cta: HeroCta) => (
                <a
                  key={cta.id}
                  href={`/plantes/${cta.value.page}`}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  {cta.value.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body Sections */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        {data.body.map((section: Section) => (
          <section
            key={section.id}
            className="max-w-6xl mx-auto mb-20 last:mb-0"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">{section.value.heading}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {section.value.content.map((content: ContentItem) => (
                <div
                  key={content.id}
                  className="prose max-w-none bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div dangerouslySetInnerHTML={{ __html: content.value }} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}