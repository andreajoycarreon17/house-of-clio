import { notFound } from "next/navigation";

import { PROGRAMME_ROOMS, getProgrammeRoom } from "@/data/formats";
import ProgrammeRoomClient from "./programme-room-client";

export async function generateStaticParams() {
  return PROGRAMME_ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getProgrammeRoom(slug);

  if (!room) return {};

  const title = `${room.title} | The Exchange | The House of Clio`;
  const description = room.description;
  const url = `https://thehouseofclio.com/programme/${room.slug}`;

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

export default async function ProgrammeRoomPage({ params }) {
  const { slug } = await params;
  const room = getProgrammeRoom(slug);

  if (!room) {
    notFound();
  }

  return <ProgrammeRoomClient room={room} />;
}
