import React from "react";

import { Section } from "./Section";
import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem, i) => (
          <CoreConcept key={i} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};
