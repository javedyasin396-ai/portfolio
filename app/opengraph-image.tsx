import { ImageResponse } from 'next/og'
import { site } from '@/config/site'

export const alt = `${site.name} | ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#07080a',
          color: '#e8e6e0',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: '#c8a96e', textTransform: 'uppercase' }}>
          {site.eyebrow}
        </div>
        <div style={{ fontSize: 140, fontWeight: 700, lineHeight: 1.02, marginTop: 28, display: 'flex' }}>
          {site.name.split(' ')[0]}&nbsp;
          <span style={{ color: '#c8a96e', fontStyle: 'italic' }}>{site.name.split(' ')[1]}</span>
        </div>
        <div style={{ fontSize: 34, color: '#9ca3af', marginTop: 28 }}>
          Python · Django · React · Web applications
        </div>
      </div>
    ),
    size,
  )
}
