const META={home:{title:"Ɔuse Ɔf Clio | Private Dining and Composed Gatherings in London",desc:"A private house in London where every guest is selected, every seat is composed, and you receive a portrait of the room before you arrive. By introduction."},house:{title:"The House | Composed Private Gatherings | Ɔuse Ɔf Clio",desc:"Before each gathering, a host reads every profile and decides who sits beside whom. You receive a portrait of every person at your table. London."},programme:{title:"The Exchange | Seasonal Programme of 12 Formats | Ɔuse Ɔf Clio",desc:"Seven seasonal rooms, three recurring formats, two member-led Societies. Private dinners, supper lectures, cycling journeys, and composed tables. London."},circle:{title:"The Circle | Ɔuse Ɔf Clio London",desc:"The first people who said yes. Profiles composed around fascination, not profession. A circle of people who raise the standard of every room they enter."},founder:{title:"Gigi Brown | The Host | Ɔuse Ɔf Clio",desc:"Born in Ghana, based in London. Twenty years composing rooms across three continents. The host of the Ɔuse Ɔf Clio. Hospitality and social architecture."},journal:{title:"The Clio Journal | Essays on Adult Friendship and Social Connection",desc:"Why most gatherings fail. How composed rooms create real friendship. Essays on loneliness, social architecture, and belonging. By Gigi Brown."},questions:{title:"Questions | The Ɔuse Ɔf Clio",desc:"How to join, what to expect, how people are selected, and why the Ɔuse Ɔf Clio is different from a private members club. London."},conduct:{title:"The Standard | Seven Principles | Ɔuse Ɔf Clio",desc:"Seven principles for how the ?use holds together. Presence. Curiosity. Generosity. Discretion. Courage. Warmth. Integrity. Protecting every room."},apply:{title:"Introduce Yourself | Apply to Join | Ɔuse Ɔf Clio London",desc:"Tell us who you are and what holds your attention. A person reads every word. Not everyone is accepted. London."},contact:{title:"Contact the Ɔuse Ɔf Clio | London",desc:"A question about composed gatherings, a thought about joining the circle, or a reason to say hello. A real person reads every message and a real person replies."},press:{title:"Press and Media | Ɔuse Ɔf Clio | London Cultural House",desc:"Brand narrative, assets, imagery, story angles, and a direct line to Gigi Brown. Press enquiries welcome."},privacy:{title:"Privacy Policy | Ɔuse Ɔf Clio",desc:"Your data belongs to you. We collect only what we need. No advertising cookies. No retargeting. Profiles visible only to confirmed attendees. UK GDPR compliant."},terms:{title:"Terms of Participation | Ɔuse Ɔf Clio",desc:"Written in plain English. No membership fee. You pay only for the rooms you attend. Cancel 14 days before any gathering for a full refund."},book:{title:"The Programme | Reserve Your Place | Ɔuse Ɔf Clio",desc:"Browse the seasonal programme. Reserve your place at a composed gathering, supper lecture, city escape, or journey. Booking is open to the Circle."}};

export { META };
export const siteMetadata = {
  metadataBase: new URL("https://thehouseofclio.com"),
  title: {
    default: "The House of Clio",
    template: "Ɔ | The House of Clio",
  },
  description: "A private cultural house in London.",

  openGraph: {
    title: "The House of Clio",
    description: "A private cultural house in London.",
    url: "https://thehouseofclio.com",
    siteName: "The House of Clio",
    images: [
      {
        url: "/markv8white.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The House of Clio",
    description: "A private cultural house in London.",
    images: ["/markv8white.png"],
  },
};
