import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// 폰트 캐시 (빌드 중 반복 로드 방지)
let fontBold: ArrayBuffer | null = null;
let fontRegular: ArrayBuffer | null = null;

function getFonts() {
  // process.cwd() = 프로젝트 루트 — 빌드 번들 이후에도 public/ 디렉토리는 그대로 유지됨
  const fontsDir = join(process.cwd(), 'public/og-fonts');
  if (!fontBold) {
    fontBold = readFileSync(join(fontsDir, 'Pretendard-Bold.ttf')).buffer as ArrayBuffer;
  }
  if (!fontRegular) {
    fontRegular = readFileSync(join(fontsDir, 'Pretendard-Regular.ttf')).buffer as ArrayBuffer;
  }
  return { fontBold, fontRegular };
}

export interface OgImageOptions {
  title: string;
  category?: string;
  pubDate?: Date;
  siteTitle?: string;
  siteUrl?: string;
}

// 날짜 포맷: YYYY.MM.DD
function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

// 제목 말줄임 (Satori는 CSS line-clamp 미지원 → JS로 처리)
function truncateTitle(title: string, maxLen = 52): string {
  if (title.length <= maxLen) return title;
  return title.slice(0, maxLen - 1) + '…';
}

export async function generateOgImage(options: OgImageOptions): Promise<Buffer> {
  const {
    title,
    category,
    pubDate,
    siteTitle = '타래의 기술 노트',
    siteUrl = 'tare-blog.vercel.app',
  } = options;

  const { fontBold, fontRegular } = getFonts();

  // 색상 팔레트 — 다크 테마 (SNS 미리보기에서 눈에 띄도록)
  const BG = '#0d0d0d';
  const FG = '#f5f5f0';
  const FG_MUTED = '#8a8a8a';
  const ACCENT = '#0057d9';
  const ACCENT_LIGHT = '#e8f0ff';
  const BORDER = '#222222';
  const CHIP_BG = 'rgba(0,87,217,0.18)';

  // 제목 줄 수에 따라 폰트 크기 조정
  const displayTitle = truncateTitle(title, 60);
  const titleFontSize = displayTitle.length > 30 ? 56 : 68;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: BG,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '"Pretendard"',
          position: 'relative',
          overflow: 'hidden',
        },
        children: [
          // 배경 장식 — 우상단 원형 글로우
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '-120px',
                right: '-120px',
                width: '480px',
                height: '480px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,87,217,0.22) 0%, rgba(0,87,217,0) 70%)',
              },
            },
          },
          // 배경 장식 — 좌하단 원형 글로우
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '-80px',
                left: '-80px',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,87,217,0.12) 0%, rgba(0,87,217,0) 70%)',
              },
            },
          },
          // 좌측 액센트 바
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '4px',
                background: ACCENT,
              },
            },
          },
          // 메인 콘텐츠 영역
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '56px 72px 56px 80px',
                height: '100%',
                boxSizing: 'border-box',
              },
              children: [
                // 상단: 사이트 타이틀
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: ACCENT,
                            flexShrink: '0',
                          },
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '18px',
                            fontWeight: '400',
                            color: FG_MUTED,
                            letterSpacing: '0.02em',
                          },
                          children: siteTitle,
                        },
                      },
                    ],
                  },
                },
                // 중앙: 글 제목
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0px',
                      flex: '1',
                      justifyContent: 'center',
                      paddingBlock: '32px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: `${titleFontSize}px`,
                            fontWeight: '700',
                            color: FG,
                            lineHeight: '1.25',
                            letterSpacing: '-0.02em',
                            wordBreak: 'keep-all',
                            maxWidth: '960px',
                          },
                          children: displayTitle,
                        },
                      },
                    ],
                  },
                },
                // 하단: 카테고리 chip + 날짜 / 사이트 URL
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                    },
                    children: [
                      // 카테고리 + 날짜
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                          },
                          children: [
                            ...(category
                              ? [
                                  {
                                    type: 'div',
                                    props: {
                                      style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '6px 14px',
                                        borderRadius: '6px',
                                        background: CHIP_BG,
                                        border: `1px solid rgba(0,87,217,0.35)`,
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: ACCENT_LIGHT,
                                        letterSpacing: '0.03em',
                                      },
                                      children: category.toUpperCase(),
                                    },
                                  },
                                ]
                              : []),
                            ...(pubDate
                              ? [
                                  {
                                    type: 'div',
                                    props: {
                                      style: {
                                        fontSize: '15px',
                                        fontWeight: '400',
                                        color: FG_MUTED,
                                        fontVariantNumeric: 'tabular-nums',
                                      },
                                      children: formatDate(pubDate),
                                    },
                                  },
                                ]
                              : []),
                          ],
                        },
                      },
                      // 사이트 URL
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '14px',
                            fontWeight: '400',
                            color: FG_MUTED,
                            letterSpacing: '0.03em',
                          },
                          children: siteUrl,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // 하단 테두리 라인
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '1px',
                background: BORDER,
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Pretendard',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Pretendard',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  return Buffer.from(resvg.render().asPng());
}
