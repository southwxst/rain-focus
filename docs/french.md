# rain-focus

>[!WARNING]  
> Ce fichier README.md a été généré par une IA générative.

Un site web minimaliste utilisant l’**API Web Audio** pour diffuser un **bruit ambiant de pluie**.  
Le son est préchargé, avec prise en charge du fondu enchaîné (fade in/out), de la sauvegarde du volume et de la lecture en boucle.

---

## [日本語](../README.md) | [한국어](korean.md) | **Français** | [English](english.md)

## ✨ Fonctionnalités

- Lecture en boucle du son de pluie (`audio.mp3`)  
- **Fondu en entrée** au démarrage (2 secondes)  
- **Fondu en sortie** à l’arrêt (2 secondes)  
- Réglage du volume en temps réel via un curseur  
- Sauvegarde automatique du dernier volume dans `localStorage`  
- Utilisation de l’**API Web Audio** (`AudioBufferSourceNode`, `GainNode`)

---

## 📁 Structure du projet (exemple)

```
project/
├── index.html
├── script.ts
├── audio.mp3
└── README.md
```

---

## 🚀 Utilisation

1. Remplacez `audio.mp3` par votre propre fichier audio de pluie.  
2. Ouvrez `index.html` dans votre navigateur.  
3. Cliquez sur **Start** pour lancer la lecture, **Stop** pour l’arrêter.  
4. Ajustez le volume avec le curseur — les réglages sont sauvegardés automatiquement.

---

## 🛠 Technologies utilisées

- TypeScript  
- API Web Audio  
  - `AudioContext`  
  - `AudioBufferSourceNode`  
  - `GainNode`  
- API `fetch` / `decodeAudioData`  
- `localStorage`

---

## 🔧 Points techniques clés

- Un nouveau `AudioBufferSourceNode` est créé à chaque lecture via `createBufferSource()`  
- Les fondues sont gérées via un `GainNode`  
- Le volume est appliqué immédiatement avec `gain.setValueAtTime()`  
- Les fondues utilisent `linearRampToValueAtTime()`  

---
