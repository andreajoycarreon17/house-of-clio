// /app/image-sitemap.xml/route.js
// Serves an XML image sitemap at /image-sitemap.xml for Google Images indexing.

export async function GET() {
  const base = 'https://thehouseofclio.com';

  const images = [
    {
      url: base + '/images/hoc-mark-v8.png',
      title: 'The House of Clio Muse Mark',
      caption: 'The mark of The House of Clio, a Composed Society in London.',
    },
    {
      url: base + '/og/hoc-og-home.jpg',
      title: 'The House of Clio London',
      caption: 'The House of Clio is a private cultural institution in London.',
    },
    {
      url: base + '/og/hoc-og-gatherings.jpg',
      title: 'Forthcoming Gatherings — The House of Clio',
      caption: 'Composed private gatherings in London.',
    },
    {
      url: base + '/og/hoc-og-journal.jpg',
      title: 'The Clio Journal',
      caption: 'Essays on the art of gathering, connection, and composed social experiences.',
    },
  ];

  const items = images
    .map(function (img) {
      return (
        '<url>' +
          '<loc>' + img.url + '</loc>' +
          '<image:image>' +
            '<image:loc>' + img.url + '</image:loc>' +
            '<image:title>' + img.title + '</image:title>' +
            '<image:caption>' + img.caption + '</image:caption>' +
          '</image:image>' +
        '</url>'
      );
    })
    .join('');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset' +
      ' xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' +
      ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' +
    '>' +
    items +
    '</urlset>';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
