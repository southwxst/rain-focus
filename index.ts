const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
const volumeBar = document.getElementById("volumeBar") as HTMLInputElement;

let audioCtx: AudioContext;
let source: AudioBufferSourceNode;
let gainNode: GainNode;
let buffer: AudioBuffer | null = null;

async function loadAudio(url: string) {
  if (!audioCtx) audioCtx = new AudioContext();
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  buffer = await audioCtx.decodeAudioData(arrayBuffer);
}

function playAudio() {
  if (!buffer || !audioCtx) return;

  source = audioCtx.createBufferSource();
  source.buffer = buffer;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

  source.connect(gainNode).connect(audioCtx.destination);

  source.start();

  // フェードイン
  gainNode.gain.linearRampToValueAtTime(
    Number(volumeBar.value) / 100,
    audioCtx.currentTime + 2
  );

  // ループ設定
  source.loop = true;
}

function stopAudio() {
  if (!source || !gainNode) return;

  // フェードアウト
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
  source.stop(audioCtx.currentTime + 2);
}

function startUp() {
  const lastVolume = Number(localStorage.getItem("lastVolume")) || 1;
  volumeBar.value = String(lastVolume * 100);
}

volumeBar.addEventListener("input", () => {
  if (gainNode) {
    gainNode.gain.setValueAtTime(
      Number(volumeBar.value) / 100,
      audioCtx.currentTime
    );
  }
  localStorage.setItem("lastVolume", String(Number(volumeBar.value) / 100));
});

startBtn.addEventListener("click", () => playAudio());
stopBtn.addEventListener("click", () => stopAudio());

// 事前に音声をロード
loadAudio("audio.mp3");
startUp();
