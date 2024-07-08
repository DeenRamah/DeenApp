// app/snaps/page.tsx

import React from 'react';
import VideoItem from '@/components/cards/videoitem'; // Adjust import path based on your project structure

const Page: React.FC = () => {
  // Define local video files
  const localVideoFiles = [
    '/assets/videos/0f.mp4',
    '/assets/videos/23d.mp4',
    '/assets/videos/3e.mp4',
    '/assets/videos/4n.mp4',
    '/assets/videos/60b.mp4',
    '/assets/videos/6ui.mp4',
    '/assets/videos/72e.mp4',
    '/assets/videos/8c.mp4',
    '/assets/videos/a.mp4',
    '/assets/videos/aie.mp4',
    '/assets/videos/d.mp4',
    '/assets/videos/c.mp4',
    '/assets/1a.mp4',
    '/assets/5d.mp4',
    '/assets/il.mp4',
    '/assets/7u.mp4',
    '/assets/a0.mp4',
    '/assets/a2.mp4',
    '/assets/a4.mp4',
    '/assets/aac.mp4',
    '/assets/bh.mp4',
    '/assets/bv.mp4',
    '/assets/c2f.mp4',
    '/assets/c9.mp4',
    '/assets/e.mp4',
    '/assets/z.mp4',
    '/assets/yu.mp4',
    '/assets/x.mp4',
    '/assets/ve.mp4',
    '/assets/ui8.mp4',
    '/assets/u.mp4',
    '/assets/ol.mp4',
    '/assets/q.mp4',
    '/assets/r.mp4',
    '/assets/m.mp4',
    '/assets/rq.mp4',
    '/assets/s.mp4',
    '/assets/sa.mp4',
  ];

  return (
    <div className="main-container">
      {localVideoFiles.map((file) => (
        <VideoItem key={file} file={file} />
      ))}
    </div>
  );
};

export default Page;
