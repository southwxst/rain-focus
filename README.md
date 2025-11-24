

# rain-focus
>[!WARNING]
> このREADME.mdは生成AIによって作成されました

Web Audio API を使った、雨の環境音を再生するシンプルなサイトです。  
音声を事前ロードし、フェードイン／フェードアウト、音量保存、ループ再生などを行います。

---

## [English](docs/english.md) [한국어](docs/korean.md) [Français](docs/french.md)

## ✨ 機能

- 雨音（audio.mp3）のループ再生  
- 再生開始時のフェードイン（2 秒）  
- 停止時のフェードアウト（2 秒）  
- 音量スライダーによるリアルタイム調整  
- 前回の音量設定を localStorage に保存  
- Web Audio API（AudioBufferSourceNode / GainNode）使用

---

## 📁 ディレクトリ構成（例）

```

project/
├── index.html
├── script.ts
├── audio.mp3
└── README.md

````

---

## 🚀 使い方

1. `audio.mp3` を任意の雨音ファイルに置き換える  
2. ブラウザで `index.html` を開く  
3. **Start** ボタンで再生、**Stop** ボタンで停止  
4. スライダーで音量調整（自動保存）

---

## 🛠 技術

- TypeScript
- Web Audio API  
  - `AudioContext`
  - `AudioBufferSourceNode`
  - `GainNode`
- fetch API / decodeAudioData
- localStorage

---

## 🔧 コードポイント

- `createBufferSource()` を再生ごとに作成  
- `GainNode` を通してフェード処理  
- 音量は `gain.setValueAtTime()` で即時反映  
- フェードは `linearRampToValueAtTime()` 使用  

---

