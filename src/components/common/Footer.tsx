/* =======================================
 *クラブ智 FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2026-02-09
 * Last updated: 2026-02-09
 * ======================================= */
'use client';
import styles from './Footer.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import ScrollLink from '@/components/common/ScrollLink';
import { useEffect, useState } from 'react';
const Footer = () => {
  const [showPageTop, setShowPageTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPageTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <footer className={styles.containerFooter}></footer>
      <button
        type="button"
        className={`${styles.movePageTop} ${showPageTop ? styles.isShow : ''}`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="ページ上部へ戻る"
      />
    </>
  );
};

export default Footer;
