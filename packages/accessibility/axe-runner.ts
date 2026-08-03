import axe from 'axe-core';
import { JSDOM } from 'jsdom';

export async function runAxe(html: string) {
  const dom = new JSDOM(html);
  const { window } = dom;

  const results = await axe.run(window.document);

  return results.violations;
}
