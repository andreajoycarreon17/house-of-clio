"use client";

import { useSearchParams } from "next/navigation";
import ClioReservation from "../../../clio-booking-cards";

export default function BookPage() {
  const searchParams = useSearchParams();
  const confirmed = searchParams.get("confirmed") === "true";
  const format = searchParams.get("format");

  return <ClioReservation confirmed={confirmed} formatId={format} />;
}
