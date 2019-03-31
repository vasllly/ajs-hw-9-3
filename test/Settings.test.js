import Settings from '../src/js/Settings';

test('get default settings', () => {
  const mySettings = new Settings();
  const received = mySettings.settings;
  const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  expect(received).toEqual(expected);
});

test('set user settingst', () => {
  const mySettings = new Settings();
  mySettings.music = 'pop';
  const received = mySettings.settings;
  const expected = new Map([['theme', 'dark'], ['music', 'pop'], ['difficulty', 'easy']]);
  expect(received).toEqual(expected);
});

test('set and replace user settingst', () => {
  const mySettings = new Settings();
  mySettings.music = 'pop';
  mySettings.music = 'off';
  const received = mySettings.settings;
  const expected = new Map([['theme', 'dark'], ['music', 'off'], ['difficulty', 'easy']]);
  expect(received).toEqual(expected);
});

test('set error user settingst', () => {
  const mySettings = new Settings();
  mySettings.theme = 'gray1';
  mySettings.music = 'pop1';
  mySettings.difficulty = 'hard1';
  const received = mySettings.settings;
  const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  expect(received).toEqual(expected);
});

test('set all user settingst', () => {
  const mySettings = new Settings();
  mySettings.theme = 'gray';
  mySettings.music = 'pop';
  mySettings.difficulty = 'hard';
  const received = mySettings.settings;
  const expected = new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'hard']]);
  expect(received).toEqual(expected);
});
