'use client';
import WeddingNavbar from '@/components/WeddingNavbar/WeddingNavbar';
import overrides from '../overrides.module.scss';
import { Footer, Toolbar } from "@courtneyring/components-library";

export default function WebsiteLayout({ children }) {
  const devBuild = !!process.env.NEXT_PUBLIC_DEVELOPMENT;
  return (
    < >
      {devBuild && <Toolbar />}
      <WeddingNavbar />
      {children}
    </>
  );
}
