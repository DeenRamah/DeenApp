// lib/actions/snap.actions.ts

import { videoLinks } from '../data/VideoLinks';

export async function fetchVideoLinks(): Promise<string[]> {
  return videoLinks;
}
