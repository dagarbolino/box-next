export interface ContentItem {
  type: string;
  value: {
    heading?: string;
    text?: string;
    image?: {
      url: string;
      alt: string;
    };
  };
  id: string;
}

export interface Plante {
  id: string;
  value: {
    nom: string;
    nom_latin: string;
    description: string;
    image: number;
    imageMeta?: {
      meta: {
        download_url: string;
      };
    };
  };
}

export interface InteriorPlantsPage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
  };
  title: string;
  banner_title: string;
  introduction: string;
  plantes: Plante[];
}

export interface HeroCta {
  type: string;
  value: {
    page: number;
    title: string;
  };
  id: string;
}

export interface Section {
  type: string;
  value: {
    heading: string;
    content: ContentItem[];
  };
  id: string;
}

export interface RelatedPage {
  id: number;
  title: string;
  slug: string;
  url: string;
}

export interface HomePage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    show_in_menus: boolean;
    seo_title: string;
    search_description: string;
    first_published_at: string;
    alias_of: null;
    parent: null;
  };
  title: string;
  introduction: string;
  hero_cta: HeroCta[];
  body: Section[];
  featured_section_title: string;
  page_related_pages: RelatedPage[];
} 

