export default class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map();
    this.themes = new Set(['dark', 'light', 'gray']);
    this.musics = new Set(['trance', 'pop', 'rock', 'chillout', 'off']);
    this.difficultes = new Set(['easy', 'normal', 'hard', 'nightmare']);
  }

  set theme(theme) {
    if (this.themes.has(theme)) {
      this.userSettings.set('theme', theme);
    }
  }

  set music(music) {
    if (this.musics.has(music)) {
      this.userSettings.set('music', music);
    }
  }

  set difficulty(difficulty) {
    if (this.difficultes.has(difficulty)) {
      this.userSettings.set('difficulty', difficulty);
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
