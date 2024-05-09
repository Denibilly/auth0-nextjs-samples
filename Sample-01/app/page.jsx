'use client';

import React from 'react';
import Slider from '../components/Slider';
import Content from '../components/Content';

export default function Index() {
  return (
    <main className="w-full grid place-items-center">
      <Slider />
      <Content />
    </main>
  );
}
