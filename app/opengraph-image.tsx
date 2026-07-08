export const dynamic = 'force-static';
import { ImageResponse } from 'next/og';
import { site } from '../lib/content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#061724,#0e3144)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80 }}><div style={{ color: '#d0ad68', fontSize: 28, letterSpacing: 8 }}>CHARTERED ACCOUNTANTS</div><div style={{ fontSize: 84, lineHeight: 1.02, marginTop: 32 }}>{site.name}</div><div style={{ fontSize: 34, color: '#d7e0e5', marginTop: 28 }}>{site.tagline}</div></div>, { ...size });
}
