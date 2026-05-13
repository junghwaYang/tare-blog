---
title: "Claude Code와 Codex를 한 워크플로우에 묶기 — claude-codex로 plan→implement→review 루프 만들기"
description: "Claude Code의 계획·정밀 수정 능력과 OpenAI Codex의 자율 구현·리뷰 능력을 한 슬래시 커맨드 안에서 묶는 claude-codex 프레임워크 설치기. MCP 서버 등록, 설치 중 마주친 config 파싱 에러, 그리고 5개 커맨드 사용법을 정리했습니다."
pubDate: 2026-05-13
tags: ["claude-code", "codex", "mcp", "workflow", "ai", "tooling", "클로드코드", "코덱스", "워크플로우", "ai개발"]
category: "tooling"
slug: "claude-code-codex-workflow-setup"
draft: true
---

## 왜 굳이 두 개를 같이 쓰나

요즘 개발자 커뮤니티에서 가장 자주 보이는 풍경이 하나 있다. Claude Code와 OpenAI Codex를 둘 다 깔아놓고, 한쪽으로는 계획을 세우고 다른 한쪽으로는 구현을 시키는 사람들이다. 처음에는 "그냥 둘 다 쓰면 한쪽 결제는 낭비 아닌가" 싶었는데, 레딧에서 500명 넘는 개발자가 참여한 설문 결과를 보고 생각이 바뀌었다.

블라인드 테스트로 코드 품질만 보면 Claude Code가 67% 승률로 우세하다. 그런데 일일 사용 선호도는 Codex가 65%로 앞선다. 이유는 단순했다. Claude의 한 마디 짜리 복잡한 프롬프트가 5시간 사용 한도의 절반을 태운다. 두 번 던지면 그 주는 끝이다. 반면 Codex는 ChatGPT Plus 안에서 토큰 효율이 4배 좋고 한도에 부딪힐 일이 거의 없다.

그래서 사람들이 결론을 내렸다. 둘은 경쟁자가 아니라 보완재라는 결론. 어차피 ChatGPT Plus는 구독 중이고, Claude Max도 쓰고 있으니, 둘을 같은 워크플로우 안에 묶어버리는 게 가장 효율적인 시나리오였다.

## 분업 원리 — 누가 무엇을 하나

두 도구를 같이 쓰기로 했다면, 가장 먼저 잡아야 할 건 분업 원칙이다. 사람들이 실전에서 찾아낸 패턴은 이렇다.

- **Claude Code**가 잘하는 일: 아키텍처 설계, 큰 그림 계획, 정밀한 수정, 외부 도구 통합(MCP 생태계)
- **Codex**가 잘하는 일: 자율적인 대량 구현, 보안·품질 적대적 리뷰, 2차 의견 제공

이걸 한 작업 안에서 자연스럽게 흐르게 만들어주는 프레임워크가 깃허브의 `ching-kuo/claude-codex`다. Codex를 Claude Code의 MCP 서버로 등록하고, 다섯 개의 슬래시 커맨드로 plan → implement → review 루프를 자동화한다.

## 설치 — 사전 점검부터

설치 자체는 4단계지만, 그 전에 충돌 점검을 한 번 돌리는 게 좋다. `~/.claude/skills/`에는 보통 oh-my-claudecode 같은 다른 플러그인이 이미 깔려 있을 가능성이 높기 때문이다. `cp -r`로 무작정 복사하면 동명 파일을 덮어쓸 수 있다.

다행히 claude-codex의 6개 스킬(`claude-codex`, `codex-mcp`, `execute-codex`, `plan-codex`, `tdd-claude-codex`, `tdd-execute-codex`)은 모두 고유한 이름이라 충돌이 없었다. 점검은 이렇게 한다.

```bash
for d in claude-codex codex-mcp execute-codex plan-codex tdd-claude-codex tdd-execute-codex; do
  test -e ~/.claude/skills/"$d" && echo "CONFLICT: $d" || echo "OK: $d"
done
```

모두 OK가 나오면 진행해도 된다.

## 4단계 설치

```bash
# 1) 저장소 클론
git clone https://github.com/ching-kuo/claude-codex.git /tmp/claude-codex
cd /tmp/claude-codex

# 2) 스킬·프롬프트·커맨드 복사
mkdir -p ~/.claude/prompts ~/.claude/commands ~/.claude/skills
cp -r skills/*   ~/.claude/skills/
cp -r prompts/*  ~/.claude/prompts/
cp -r commands/* ~/.claude/commands/

# 3) Codex 설정 보강 (config 백업 먼저!)
cp ~/.codex/config.toml ~/.codex/config.toml.bak.$(date +%Y%m%d)
# ⚠️ README가 안내한 hide_agent_reasoning = true 는 현재 버전에서 파싱 에러
#    원본 가이드 그대로 적용하지 말 것. 자세한 내용은 다음 섹션 참조

# 4) Codex를 MCP 서버로 등록
claude mcp add codex -s user -- codex \
  -c model=gpt-5.3-codex \
  -c model_reasoning_effort=high \
  mcp-server
```

마지막에 Claude Code를 재시작하고 `/mcp`를 입력해서 `codex ✓ Connected`가 보이면 성공이다.

## 중간에 만난 함정 — config.toml 파싱 에러

저장소 README는 `~/.codex/config.toml`에 `hide_agent_reasoning = true` 한 줄을 추가하라고 안내한다. 그대로 따라 했더니 MCP 연결이 실패했다. 에러 메시지는 이랬다.

```
~/.codex/config.toml:110:1: invalid type: boolean `true`,
expected struct AgentRoleToml
```

이 줄을 `[agents]` 테이블 바로 아래에 넣으면, Codex 0.128.0은 그걸 `agents.hide_agent`라는 테이블의 `reasoning` 필드로 해석한다. 단일 boolean이 아니라 객체를 기대하니까 파싱이 깨진다.

해결은 두 가지다. 정확한 키 이름을 찾아 적절한 섹션에 넣거나, 그 줄을 그냥 빼는 것. 알아보니 `hide_agent_reasoning`은 단순히 추론 과정 출력을 숨기는 코스메틱 옵션이고, 핵심 동작에는 영향이 없다. 그래서 빼버리는 쪽을 선택했다. 깔끔하게 동작하고 있다.

`codex login status`를 돌려보면 config 파싱이 정상인지 즉시 알 수 있다. `Logged in using ChatGPT`가 떠야 문제 없는 상태다. 다른 에러 메시지가 보이면 그 시점의 config.toml에 문제가 있는 것이다.

## 다섯 개의 슬래시 커맨드 — 언제 무엇을 쓰나

설치가 끝나면 다음 다섯 개의 커맨드를 쓸 수 있다.

| 커맨드 | 역할 | 적합한 상황 |
|---|---|---|
| `/plan-codex` | Opus가 계획, Codex가 1차 감수 | 큰 기능을 새로 만들기 전 |
| `/claude-codex` | Claude 구현 + Codex 리뷰 | 작업 규모 작거나 중간 |
| `/execute-codex` | 규모 기반 자동 라우팅 | 이미 plan.md가 있을 때 |
| `/tdd-claude-codex` | TDD: Claude 테스트 → Codex 감시 → Claude 구현 | 테스트 우선 작업 |
| `/tdd-execute-codex` | TDD + 자동 라우팅 | 큰 작업을 TDD로 |

가장 자주 쓰는 흐름은 이렇다.

```
1. /plan-codex JWT 인증을 API에 추가
   → .claude/plan/jwt-auth.md 생성됨 (Codex가 계획 감수)

2. /execute-codex .claude/plan/jwt-auth.md
   → 파일 수 ≤2개·라인 ≤30이면 Claude 직접 구현
   → 그 외에는 Codex가 자율 구현
   → 끝나면 자동으로 code-reviewer 검수

3. 결과 판정: APPROVED / WARNING / BLOCKED
   → BLOCKED만 자동 재구현 (최대 3회 반복)
```

핵심은 `/execute-codex`의 자동 라우팅이다. 변경 규모가 작으면 Claude가 직접 하고, 크면 Codex로 위임한다. 이 결정을 사람이 일일이 안 내려도 된다는 게 가장 큰 편의성이다.

## OMC와 함께 쓸 때 — 두 가지 접근의 차이

기존에 oh-my-claudecode(OMC)를 쓰고 있었다면, claude-codex와 OMC의 Codex 활용 방식이 서로 결이 다르다는 걸 인지하는 게 좋다.

| | claude-codex | OMC + Codex |
|---|---|---|
| 호출 방식 | 슬래시 커맨드 | MCP 직접 호출(`ask_codex`) |
| 사고 단위 | 워크플로우(plan→implement→review) | 역할 위임(특정 작업만) |
| 사용 시점 | 큰 기능 개발 | 빠른 2차 의견·병렬 분석 |

OMC에서 Codex를 부르려면 대화 중에 자연어로 트리거하면 된다.

```
"ask codex 이 PR 보안 검토 해줘"
"use codex to plan the migration"
"delegate to codex 아키텍처 검증"
```

이렇게 말하면 OMC가 자동으로 `mcp__x__ask_codex`를 호출한다. 거기서 `agent_role` 파라미터로 어떤 역할로 부를지 지정할 수 있다. OMC 공식 가이드가 Codex에 적합하다고 분류한 역할은 다음 일곱 개다.

- `architect`
- `planner`
- `critic`
- `analyst`
- `code-reviewer`
- `security-reviewer`
- `tdd-guide`

이 외에 다관점 합의 기반 계획이 필요할 때는 `/oh-my-claudecode:ralplan`을 쓰면 된다. Planner, Architect, Critic이 합의될 때까지 반복하는 모드인데, 이 중 한 역할을 Codex가 맡으면 자연스러운 다관점 검증이 이뤄진다.

## 같은 작업, 어느 쪽을 쓸지

판단 기준은 단순하다. 작업이 워크플로우인가, 스팟성 위임인가.

- **워크플로우**(큰 기능, 다단계 작업): claude-codex
  - 예: "결제 모듈 새로 만들자" → `/plan-codex` → `/execute-codex`
- **스팟성 위임**(단발성 검증·조회): OMC `ask_codex`
  - 예: "이 PR 한 번만 보안 점검" → "ask codex 보안 리뷰 해줘"

둘 다 결국 같은 ChatGPT Plus 쿼터를 쓴다는 점은 잊지 말자. 큰 작업은 claude-codex로 묶고, 자잘한 검증은 OMC의 한 줄짜리 위임으로 처리하는 게 토큰 효율이 좋다.

## 실전에서 체감한 점

이걸 깔고 처음 며칠 써본 소감.

먼저 좋은 점. 계획 단계에 시간을 들이게 된다. `/plan-codex`로 만든 plan.md를 Codex가 1차로 감수해주니까, 빈틈을 한 번 더 거른 뒤에 구현에 들어가게 된다. README가 강조한 "planning에 시간 쓰면 디버깅이 줄어든다(버그 47% 감소)"는 마케팅 문구처럼 들리지만, 직접 써보니 빈말은 아니었다. 빠뜨린 엣지 케이스를 계획 단계에서 잡아주는 횟수가 확실히 늘었다.

다음은 주의할 점. Codex가 자율 구현으로 들어가면 ChatGPT Plus 사용량이 빠르게 줄어든다. 작은 작업까지 전부 `/execute-codex`에 맡기면 한 시간 만에 한도에 부딪힌다. 그래서 본인 안에서 "이건 Claude로", "이건 Codex로"의 기준을 세팅 첫 주에 만드는 게 좋다.

그리고 외부 영향이 있는 작업, 즉 배포·DB 마이그레이션·API 키 변경 같은 건 plan 단계에서 명시적으로 "수동 단계"로 표시해두는 습관을 들이는 게 안전하다. 자동 실행 루프가 사고를 치는 가장 흔한 자리가 이 영역이다.

## 마무리 — 어디서부터 시작하면 좋나

처음 깐 사람이 가장 빠르게 감을 잡는 방법은 가벼운 함수 하나를 두 가지 방식으로 돌려보는 것이다.

```
1. 가벼운 함수 골라서:
   /claude-codex 이 함수에 입력 검증 추가

2. 같은 함수에 대해 OMC 방식:
   "ask codex 이 함수 코드 리뷰 + 보안 점검"
```

두 결과물을 나란히 놓고 보면, 각자의 결이 다르다는 게 즉시 보인다. claude-codex는 워크플로우 한 사이클을 깔끔하게 돌려주고, OMC ask는 단일 관점에서 명확한 피드백을 던져준다. 둘 다 잘하는 자리가 있다.

이 두 가지를 자유롭게 오갈 수 있게 되면, "AI 어시스턴트 한 명"이 아니라 "팀"을 가진 느낌이 든다. Claude가 큰 그림을 그리고, Codex가 구현을 자율적으로 끌고 가고, 둘이 서로 검토하는 구도. 한 번 익숙해지면 도구 하나만 쓰는 워크플로우로는 돌아가기 어렵다.

## 참고

- ching-kuo/claude-codex: https://github.com/ching-kuo/claude-codex
- OpenAI Codex Plugin for Claude Code (2026년 3월 공식 출시)
- 레딧 500+ 개발자 설문 분석 (dev.to "Claude Code vs Codex 2026")
- BSWEN — 6단계 통합 워크플로우 가이드
