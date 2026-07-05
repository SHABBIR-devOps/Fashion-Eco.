import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-16">
      <p className="font-mono text-xs tracking-widest text-cobalt mb-3">OUR STUDIO</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold mb-6">Built from the fabric up.</h1>
      <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
        FORME started as a two-person pattern-cutting studio focused on one question: why do so few
        clothes actually move the way people do? Every piece we make since has been built from that
        block outward — natural fibers, seams finished to lie flat, and a fit tested on real bodies,
        not just a stand.
      </p>
      <p className="font-body text-sm text-ink-soft leading-relaxed">
        We keep the collection small on purpose. Fewer pieces, made well, worn for years — not
        replaced every season.
      </p>
    </div>
  );
}
