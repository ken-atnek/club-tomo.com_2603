/* =======================================
 * クラブ智 お部屋紹介
 * URL:src/components/Top/ContainerRoomInfo.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2026-03-25
 * Last updated: 2026-03-25
 * ======================================= */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/PageTop.module.scss';

const rooms = [
  { name: 'フロア名', image: '/images/room/photo_004.webp' },
  { name: 'フロア名', image: '/images/room/photo_005.webp' },
  { name: 'フロア名', image: '/images/room/photo_006.webp' },
  { name: 'フロア名', image: '/images/room/photo_007.webp' },
  { name: '智の間', image: '/images/room/photo_003.webp' },
  { name: 'VIP I', image: '/images/room/photo_001.webp' },
  { name: 'VIP II', image: '/images/room/photo_002.webp' },
  { name: 'VIP III', image: '/images/room/photo_008.webp' },
];

export default function ContainerRoomInfo() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className={styles.containerRoomInfo} id="ContainerRoomInfo">
      <div className={styles.roomInfoImage}>
        {rooms.map((room, index) => (
          <Image
            key={index}
            src={room.image}
            alt={room.name}
            fill
            style={{
              objectFit: 'cover',
              opacity: index === selectedIndex ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
            unoptimized
          />
        ))}
      </div>
      <article>
        <h2>お部屋紹介</h2>
        <nav>
          {rooms.map((room, index) => (
            <button
              key={index}
              className={`${styles.roomInfoMenuItem} ${index === selectedIndex ? styles.roomInfoMenuItemActive : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              {room.name}
            </button>
          ))}
        </nav>
      </article>
    </section>
  );
}
