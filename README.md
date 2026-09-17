# lesson-deck-builder

교강사가 자기 수업계획안, `design.md`와 샘플 PPT를 바탕으로 **편집 가능한 PPTX 또는 16:9 HTML 교안**을 만들 때 사용하는 수강생용 제작 스킬입니다.

이 저장소에는 수업에서 배포할 `lesson-deck-builder` 스킬만 있습니다. 강사용 내부 스킬, 수업 PPT, 실습 샘플, 프롬프트와 ELI5 자료는 포함하지 않습니다.

## 받기

- [lesson-deck-builder.zip](lesson-deck-builder.zip): 설치용 압축 파일
- [lesson-deck-builder/](lesson-deck-builder/): 스킬 원본과 참고 문서

## 설치

압축을 푼 `lesson-deck-builder` 폴더 전체를 사용하는 에이전트 AI의 프로젝트 스킬 위치에 넣습니다.

Codex 프로젝트의 일반적인 예시는 다음과 같습니다.

```text
.agents/skills/lesson-deck-builder/
├─ SKILL.md
├─ agents/
└─ references/
```

다른 제품에서는 해당 제품이 안내하는 프로젝트 스킬 위치를 사용하세요.

## 시작 예시

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

## 이 스킬이 하는 일

- 수업계획안·교안 원고·장표별 제작 안내 읽기
- `design.md`와 샘플 PPT의 디자인 요소를 나누어 적용하기
- 편집 가능한 PPTX 또는 16:9 HTML 교안 제작하기
- 먼저 대표 화면 2장을 만들고 실제 렌더링 확인하기
- 문제가 있는 장표나 요소만 수정하고 전체 범위로 확장하기

## 사용자가 결정할 일

- 학습목표와 평가의 교육적 적합성
- 수업 방향, 차시 구성과 시간 배분
- 추가 자료 조사와 자료 채택
- 디자인 충돌이 있을 때 어떤 요소를 따를지
- 최종 결과를 사용할지와 외부에 공개할지

## 필요한 환경

이 스킬은 에이전트 AI가 실제 파일을 읽고 쓰며 결과물을 확인할 수 있다는 전제로 동작합니다.

- PPTX 제작: PPTX를 생성하고 슬라이드를 렌더링할 수 있는 환경
- HTML 제작: 파일을 만들고 브라우저 화면을 확인할 수 있는 환경
- 샘플 PPT 분석: 원본 PPTX의 화면 또는 구조를 읽을 수 있는 환경

파일을 만들거나 렌더링할 수 없는 일반 대화형 AI에서는 제작 절차 안내까지만 가능할 수 있습니다.

## 저장소 구조

```text
.
├─ README.md
├─ lesson-deck-builder.zip
└─ lesson-deck-builder/
   ├─ SKILL.md
   ├─ agents/
   └─ references/
```

## 출처와 배포 조건

스킬의 디자인 검수 원칙에 참고한 제3자 자료와 라이선스는 [third-party-notices.md](lesson-deck-builder/references/third-party-notices.md)에 기록되어 있습니다.

이 저장소 자체의 별도 라이선스는 아직 지정하지 않았습니다. 수업 외 재배포나 상업적 이용 범위가 필요하면 저장소 운영자에게 확인하세요.
