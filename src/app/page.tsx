import { fetchHomePage } from '@/services/api';
import { ContentItem, HeroCta, Section } from '@/types/home';

export default async function Home() {
  const data = await fetchHomePage();

  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg mb-8">{data.introduction}</p>

        {data.hero_cta.map((cta: HeroCta) => (
          <a
            key={cta.id}
            href={`/plantes/${cta.value.page}`}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            {cta.value.title}
          </a>
        ))}
      </section>

      {/* Body Sections */}
      {data.body.map((section: Section) => (
        <section key={section.id} className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-6">{section.value.heading}</h2>
          {section.value.content.map((content: ContentItem) => (
            <div
              key={content.id}
              dangerouslySetInnerHTML={{ __html: content.value }}
              className="prose max-w-none"
            />
          ))}
        </section>
      ))}
    </main>
  );
}