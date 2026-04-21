"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ClioReservation from "../../../clio-booking-cards";

function BookContent() {
  const searchParams = useSearchParams();
  const confirmed = searchParams.get("confirmed") === "true";
  const format = searchParams.get("format");

  return <ClioReservation confirmed={confirmed} formatId={format} />;
}

export default function BookPage() {
  return (
    <Suspense>
      <BookContent />
    </Suspense>
  );
}
