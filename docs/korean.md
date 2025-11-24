# rain-focus

>[!WARNING]  
> 이 README.md는 생성형 AI에 의해 작성되었습니다.

Web Audio API를 활용하여 **비 오는 소리**(ambient rain sound)를 재생하는 간단한 웹사이트입니다.  
오디오를 사전 로드하고, 페이드인/페이드아웃, 볼륨 저장, 루프 재생 등을 지원합니다.

---

## [日本語](../../README.md) | **한국어** | [Français](../french.md) | [English](english.md)

## ✨ 기능

- 비 소리(`audio.mp3`)의 루프 재생  
- 재생 시작 시 **페이드인 **(2초)  
- 정지 시 **페이드아웃 **(2초)  
- 볼륨 슬라이더를 통한 실시간 조절  
- 이전 볼륨 설정을 `localStorage`에 자동 저장  
- Web Audio API 사용 (`AudioBufferSourceNode`, `GainNode`)

---

## 📁 디렉터리 구조 (예시)

```
project/
├── index.html
├── script.ts
├── audio.mp3
└── README.md
```

---

## 🚀 사용 방법

1. `audio.mp3`를 원하는 비 소리 파일로 교체하세요.  
2. 브라우저에서 `index.html`을 엽니다.  
3. **Start** 버튼으로 재생, **Stop** 버튼으로 정지합니다.  
4. 슬라이더로 볼륨을 조정하면 설정이 자동으로 저장됩니다.

---

## 🛠 사용 기술

- TypeScript  
- Web Audio API  
  - `AudioContext`  
  - `AudioBufferSourceNode`  
  - `GainNode`  
- fetch API / `decodeAudioData`  
- `localStorage`

---

## 🔧 핵심 구현 포인트

- 재생 시마다 `createBufferSource()`로 새 소스 생성  
- 페이드 처리는 `GainNode`를 통해 수행  
- 볼륨 변경은 `gain.setValueAtTime()`으로 즉시 반영  
- 페이드 인/아웃은 `linearRampToValueAtTime()` 사용  

---
