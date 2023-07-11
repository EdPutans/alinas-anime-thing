"use client";
import { Suspense, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const resp = fetch(
      "https://www.topmanhua.com/manhua/surviving-as-an-obsessive-servant/",
      {
        method: "GET",
        mode: "no-cors",
        headers: {},
      }
    )
      .then((r) => r.text())
      .then((r) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(r, "text/html");
        const item = doc.querySelector(".c-new-tag");
        console.log(item);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback="loading...">
        <p></p>
      </Suspense>
    </main>
  );
}
