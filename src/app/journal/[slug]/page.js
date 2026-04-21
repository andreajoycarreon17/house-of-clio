import { notFound } from "next/navigation";

import { JOURNAL_ARTICLES, getJournalArticle } from "@/data/formats";
import JournalArticleClient from "./journal-article-client";

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) return {};

  const title = `${article.title} | The Clio Journal | The House of Clio`;
  const description = article.excerpt;
  const url = `https://thehouseofclio.com/journal/${article.slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function JournalArticlePage({ params }) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  const activeArticle = JOURNAL_ARTICLES.findIndex((entry) => entry.slug === slug);
  const previous = activeArticle > 0 ? JOURNAL_ARTICLES[activeArticle - 1] : null;
  const next = activeArticle < JOURNAL_ARTICLES.length - 1 ? JOURNAL_ARTICLES[activeArticle + 1] : null;
  const continueReading = [
    JOURNAL_ARTICLES[(activeArticle + 1) % JOURNAL_ARTICLES.length],
    JOURNAL_ARTICLES[(activeArticle + 2) % JOURNAL_ARTICLES.length],
  ];

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    dateline: "London, United Kingdom",
    articleSection: "Culture",
    keywords: "private dining London, cultural salon, composed gathering, adult friendship, The House of Clio",
    author: {
      "@type": "Person",
      "@id": "https://thehouseofclio.com/about/gigi-brown#person",
      name: "Gigi Brown",
    },
    publisher: {
      "@id": "https://thehouseofclio.com/#organization",
      "@type": "Organization",
      name: "The House of Clio",
      logo: {
        "@type": "ImageObject",
        url: "https://thehouseofclio.com/images/hoc-mark-v8.png",
      },
    },
    datePublished: article.publishedAt || "2026-06-01",
    dateModified: article.updatedAt || article.publishedAt || "2026-06-01",
    mainEntityOfPage: `https://thehouseofclio.com/journal/${article.slug}`,
    image: {
      "@type": "ImageObject",
      url: "https://thehouseofclio.com/og/hoc-og-journal.jpg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />
      <JournalArticleClient
        article={article}
        activeArticle={activeArticle}
        totalArticles={JOURNAL_ARTICLES.length}
        previous={previous}
        next={next}
        continueReading={continueReading}
      />
    </>
  );
}
