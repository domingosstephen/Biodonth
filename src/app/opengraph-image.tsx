import { ImageResponse } from 'next/og';

export const alt = 'Biodonth Odontologia Integrada';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #F5F3EF 0%, #EDE9E1 100%)',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{
            fontSize: '28px',
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 500,
            color: '#A8824D',
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
          }}>
            BIODONTH ODONTOLOGIA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
          <div style={{
            fontSize: '72px',
            fontFamily: 'Georgia, serif',
            fontWeight: 400,
            color: '#2A2B2D',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Volte a sorrir
          </div>
          <div style={{
            fontSize: '72px',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#A8824D',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            sem pensar duas vezes.
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <div style={{
            fontSize: '24px',
            fontFamily: 'system-ui, sans-serif',
            color: '#8E8F91',
          }}>
            Artur Alvim, S\u00e3o Paulo — Desde 2015
          </div>
          <div style={{
            fontSize: '24px',
            fontFamily: 'system-ui, sans-serif',
            color: '#A8824D',
            fontWeight: 500,
          }}>
            biodonth.com.br
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '8px',
          backgroundColor: '#A8824D',
        }} />
      </div>
    ),
    { ...size },
  );
}
