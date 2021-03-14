// eslint-disable-next-line import/prefer-default-export

export const truncate = (str:string, max:number, suffix:string) =>
  // eslint-disable-next-line max-len,implicit-arrow-linebreak
  (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);

export const msToTime = (duration: number) => {
  let d = duration;
  const portions: string[] = [];

  const msInHour = 1000 * 60 * 60;
  const hours = Math.trunc(d / msInHour);
  if (hours > 0) {
    d -= (hours * msInHour);
  }

  const msInMinute = 1000 * 60;
  const minutes = Math.trunc(d / msInMinute);
  if (minutes > 0) {
    portions.push(`${minutes}`);
    d -= (minutes * msInMinute);
  }

  const seconds = Math.trunc(d / 1000);
  const stringSeconds : string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  portions.push(stringSeconds);

  return portions.join(':');
};

export const REPEAT_MODE = [
  'off', 'track', 'context',
];
