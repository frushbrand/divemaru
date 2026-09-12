# 다이브마루 (DIVE MARU) 랜딩페이지

경북 경주 감포 기반 스쿠버 다이빙 교육 **다이브마루**의 원페이지 소개 사이트입니다.
금액·세부 일정은 노출하지 않고, 자세한 내용은 문의로 연결되는 구조입니다.
빌드 도구 없이 정적 파일로만 구성되어 Vercel에 그대로 올리면 배포됩니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 랜딩페이지 본문 |
| `styles.css` | 전체 스타일 (1440 / 390px 확인 완료) |
| `script.js` | 모바일 메뉴, 연도 자동 표기 |
| `images/` | 사진을 넣는 폴더 — 파일명과 비율은 `images/README.md` 참고 |
| `favicon.svg` | 파비콘 |
| `og.png` | 카카오톡·SNS 공유 미리보기 이미지 (1200×630) |
| `vercel.json` | 정적 배포 설정 (cleanUrls, 캐시·보안 헤더) |
| `robots.txt`, `sitemap.xml` | 검색엔진 수집용 |

### 페이지 흐름

히어로 → 3가지 특징 → COURSES(프로그램 4종) → 소개 → FLOW(진행 4단계)
→ INSTRUCTOR(강사) → 문의 배너 → LOCATION(오시는 길) → 푸터

## 사진 넣기

`images/` 폴더에 정해진 파일명으로 사진을 넣으면 자동으로 반영됩니다.
사진이 없는 자리는 짙은 남색 플레이스홀더가 표시되므로, 사진 없이도 페이지는 정상 동작합니다.
필요한 파일명과 권장 비율은 **`images/README.md`** 에 정리해 두었습니다.

## 배포 전 교체해야 할 항목

1. **전화번호** — `index.html`의 `tel:01000000000` (2곳: 문의 배너)
2. **카카오톡 채널 주소** — `https://pf.kakao.com/` (문의 배너, 우측 바로가기, 푸터)
3. **인스타그램 주소** — `https://instagram.com/` (우측 바로가기, 푸터)
4. **도메인** — 임시로 `https://divemaru.kr/` 이 들어가 있습니다. 실제 도메인으로 일괄 변경하세요.

```bash
# 예: 도메인을 divemaru.com 으로 바꿀 때
grep -rl 'divemaru.kr' . --exclude-dir=.git | xargs sed -i 's|divemaru\.kr|divemaru.com|g'
```

5. (선택) 사업자등록번호가 나오면 푸터 `.ft__biz`에 한 줄 추가하면 됩니다.

## Vercel 배포

### 방법 A — GitHub 연동 (권장)

1. [vercel.com](https://vercel.com) 로그인 → **Add New → Project**
2. 이 저장소를 선택 → Import
3. Framework Preset은 **Other**, Build Command와 Output Directory는 **비워 둠**
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
4. 연결이 끝나면 위 **배포 전 교체해야 할 항목 4번**의 도메인도 실제 주소로 맞춰 주세요

## 로컬 확인

```bash
npx serve .
# 또는
python3 -m http.server 8000
```
