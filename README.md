# 다이브마루 (Dive Maru) 랜딩페이지

경북 경주 감포 기반의 교육 중심 해양레저 플랫폼 **다이브마루**의 원페이지 소개 사이트입니다.
빌드 도구 없이 정적 파일로만 구성되어 있어 Vercel에 그대로 올리면 배포됩니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 랜딩페이지 본문 (히어로 / 소개 / 프로그램 / 진행 과정 / 강사 / 오시는 길 / 문의) |
| `styles.css` | 전체 스타일 (반응형, 모바일 390px까지 확인 완료) |
| `script.js` | 상단바 스크롤 상태, 스크롤 등장 애니메이션, 연도 자동 표기 |
| `favicon.svg` | 파비콘 |
| `og.png` | 카카오톡·SNS 공유 시 노출되는 미리보기 이미지 (1200×630) |
| `vercel.json` | 정적 배포 설정 (cleanUrls, 캐시·보안 헤더) |
| `robots.txt`, `sitemap.xml` | 검색엔진 수집용 |

## 배포 전 교체해야 할 항목

1. **전화번호** — `index.html`의 `<a class="btn" href="tel:01000000000">전화 문의</a>`
2. **인스타그램 주소** — `index.html`의 `https://instagram.com/` 링크
3. **도메인** — 아래 파일에 임시로 `https://divemaru.kr/` 이 들어가 있습니다. 실제 도메인으로 일괄 변경하세요.
   - `index.html` (canonical, og:url, og:image, JSON-LD)
   - `robots.txt`, `sitemap.xml`

```bash
# 예: 도메인을 divemaru.com 으로 바꿀 때
grep -rl 'divemaru.kr' . --exclude-dir=.git | xargs sed -i 's|divemaru\.kr|divemaru.com|g'
```

4. (선택) 참가비·운영 시간·네이버 예약 링크가 확정되면 `#programs`, `#contact` 영역에 추가하면 됩니다.

## Vercel 배포

### 방법 A — GitHub 연동 (권장)

1. [vercel.com](https://vercel.com) 로그인 → **Add New → Project**
2. 이 저장소를 선택 → Import
3. Framework Preset은 **Other**, Build Command와 Output Directory는 **비워 둠** (정적 파일 그대로 배포)
4. Deploy

이후 기본 브랜치에 push할 때마다 자동으로 재배포됩니다.

### 방법 B — CLI

```bash
npm i -g vercel
vercel          # 미리보기 배포
vercel --prod   # 운영 배포
```

## 도메인 연결

1. Vercel 프로젝트 → **Settings → Domains → Add**에 도메인 입력
2. 도메인 등록 기관(가비아·후이즈·Cloudflare 등) DNS에 Vercel이 안내하는 레코드를 추가
   - 루트 도메인 (`divemaru.kr`): **A** 레코드 → `76.76.21.21`
   - 서브도메인 (`www.divemaru.kr`): **CNAME** → `cname.vercel-dns.com`
3. DNS 전파 후 Vercel이 SSL 인증서를 자동 발급합니다 (보통 몇 분 ~ 수십 분)
4. 연결이 끝나면 위 **배포 전 교체해야 할 항목 3번**의 도메인도 실제 주소로 맞춰 주세요

## 로컬 확인

```bash
npx serve .
# 또는
python3 -m http.server 8000
```
