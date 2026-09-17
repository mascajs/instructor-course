# AI 강의 제작소 — 수강생 자료실

교강사가 자기 강의계획서, `design.md`, 샘플 PPT를 바탕으로 실제 PPTX 또는 HTML 교안을 만드는 수업의 공개 자료 저장소입니다.

- 홈페이지: <https://mascajs.github.io/instructor-course/>
- 대상: `AI 강의 제작소` 수강생과 교안 제작을 연습하는 교강사
- 공개 스킬: `lesson-deck-builder`

이 저장소에는 **수강생이 사용하는 제작 스킬만** 들어 있습니다. 강사가 수업 전체를 기획·관리할 때 사용하는 내부 스킬은 포함하지 않습니다.

## 바로 받기

| 자료 | 용도 | 파일 |
|---|---|---|
| 수강생용 제작 스킬 | PPTX·HTML 교안 제작과 실제 화면 검수 | [lesson-deck-builder.zip](downloads/lesson-deck-builder.zip) |
| 단계별 프롬프트 | 자료 확인부터 제작 요청까지 순서대로 진행 | [수강생용 프롬프트 워크북](downloads/prompts/수강생용_단계별_프롬프트_워크북_v2.md) |
| 설치·사용 안내 | 스킬 설치 위치와 시작 요청 예시 | [수강생용 스킬 시작 안내](downloads/prompts/수강생용_스킬_시작안내.md) |
| 실습 샘플 3종 | 수업 계획안, Spotify 디자인 문서, 뉴모피즘 샘플 PPT | [실습 샘플 3종.zip](downloads/실습_샘플_3종.zip) |

## 차시별 교안

| 차시 | 내용 | 파일 |
|---|---|---|
| 1차시 | 자료 확인, 수업 방향, 조사, 수업 순서와 장표별 제작 안내 | [1차시 PPTX](downloads/course-decks/AI_강의제작소_1차시_실행중심_손그림_v4.pptx) |
| 2차시 | 먼저 시험할 화면 2장, 전체 교안, 발표 노트와 활동자료 제작 | [2차시 PPTX](downloads/course-decks/AI_강의제작소_2차시_손그림_전체31장_v2.pptx) |
| 3차시 | 교안과 자료를 연결하는 홈페이지 제작과 공개 전 점검 | [3차시 PPTX](downloads/course-decks/AI_강의제작소_3차시_손그림_전체31장_v2.pptx) |

## ELI5 개념 자료

ELI5로 제작한 HTML 설명 자료는 원본 폴더의 파일과 구성을 바꾸지 않고 ZIP으로 묶었습니다.

- [AI 스킬 설명 자료](downloads/eli5/ELI5_스킬_설명자료.zip)
- [MCP 설명 자료](downloads/eli5/ELI5_MCP_설명자료.zip)
- [웹 AI와 에이전트 AI 비교 자료](downloads/eli5/ELI5_웹AI와_에이전트AI.zip)

ZIP을 푼 뒤 폴더 안의 HTML 파일을 열면 됩니다. HTML과 함께 들어 있는 이미지 폴더를 분리하거나 파일명을 바꾸면 화면이 깨질 수 있습니다.

## 스킬 설치

압축을 푼 `lesson-deck-builder` 폴더 전체를 에이전트 AI의 프로젝트용 스킬 폴더에 넣습니다.

Codex 프로젝트의 일반적인 예시는 다음과 같습니다.

```text
.agents/skills/lesson-deck-builder/
├─ SKILL.md
├─ agents/
└─ references/
```

다른 제품에서는 해당 제품이 안내하는 프로젝트 스킬 위치를 사용하세요. 파일을 읽고 쓰거나 PPTX를 렌더링하고 HTML을 브라우저에서 확인할 수 없는 AI에서는 스킬을 설치해도 실제 파일 제작과 화면 검수를 끝낼 수 없습니다.

### 시작 예시

```text
$lesson-deck-builder

첨부한 수업계획안, design.md, 샘플 PPT와
내가 확인한 장표별 제작 안내표를 사용해
편집 가능한 PPTX 또는 16:9 HTML 교안을 만들어줘.

먼저 성격이 다른 화면 2장을 실제 파일로 만들고 화면을 확인해.
문제가 있으면 해당 부분만 수정하고 다시 확인한 뒤
요청한 전체 범위로 이어서 제작해.

결과 형식: [PPTX / HTML]
제작 범위: [범위]
저장 위치와 파일명: [사용자가 지정]
```

## 스킬이 하는 일과 하지 않는 일

`lesson-deck-builder`가 하는 일:

- 수업계획안·교안 원고·장표별 제작 안내 읽기
- `design.md`와 샘플 PPT의 요소별 디자인 적용
- 편집 가능한 PPTX 또는 16:9 HTML 교안 제작
- 실제 화면 확인과 문제 부분 수정

사용자와 사용하는 AI가 별도로 결정할 일:

- 학습목표와 평가의 교육적 적합성
- 수업 방향과 시간 배분
- 추가 자료 조사와 자료 채택
- 홈페이지 제작과 외부 공개
- 최종 결과 사용 여부

## 저장소 구조

```text
.
├─ index.html                     # 수업자료 홈페이지
├─ styles.css
├─ script.js
├─ skills/
│  └─ lesson-deck-builder/        # 설치 가능한 스킬 원본
├─ downloads/
│  ├─ lesson-deck-builder.zip
│  ├─ prompts/                    # 단계별 프롬프트와 시작 안내
│  ├─ course-decks/               # 1·2·3차시 PPTX
│  ├─ practice-kit/               # 실습용 입력자료 3종
│  └─ eli5/                       # 원본 폴더를 묶은 ELI5 ZIP
└─ assets/previews/               # 홈페이지 미리보기 이미지
```

## 업데이트 방법

1. 스킬 원본은 `skills/lesson-deck-builder/`에서 수정합니다.
2. 수정 후 스킬 검증기를 통과시킵니다.
3. `downloads/lesson-deck-builder.zip`도 같은 내용으로 다시 만듭니다.
4. 교안이나 프롬프트를 바꾸면 홈페이지의 파일명·버전·설명도 함께 갱신합니다.
5. `main` 브랜치에 반영하면 GitHub Pages 배포 작업이 실행됩니다.

## 출처와 배포 조건

스킬의 디자인 검수 원칙에 참고한 제3자 자료와 라이선스는 [third-party-notices.md](skills/lesson-deck-builder/references/third-party-notices.md)에 기록되어 있습니다.

이 저장소 자체의 별도 라이선스는 아직 지정하지 않았습니다. 수업 외 재배포나 상업적 이용 범위가 필요하면 저장소 운영자에게 확인하세요.
