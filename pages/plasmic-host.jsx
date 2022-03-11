
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import WordRotator from '../components/WordRotator';

import { registerComponent } from '@plasmicapp/host';

registerComponent(WordRotator, {
  name: "WordRotatorComp",
  props: {
    words: 'words'
  },
  importPath: './components/WordRotator',
})

export default function PlasmicHost() {
  return PLASMIC && (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  );
}
    