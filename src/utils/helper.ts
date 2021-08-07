// eslint-disable-next-line import/prefer-default-export

export const truncate = (str: string, max: number, suffix: string) =>
  // eslint-disable-next-line max-len,implicit-arrow-linebreak
  str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

export const msToTime = (duration: number) => {
  let d = duration;
  const portions: string[] = [];

  const msInHour = 1000 * 60 * 60;
  const hours = Math.trunc(d / msInHour);
  if (hours > 0) {
    d -= hours * msInHour;
  }

  const msInMinute = 1000 * 60;
  const minutes = Math.trunc(d / msInMinute);
  if (minutes > 0) {
    portions.push(`${minutes}`);
    d -= minutes * msInMinute;
  }

  const seconds = Math.trunc(d / 1000);
  const stringSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  portions.push(stringSeconds);

  return portions.join(':');
};

// The Lodash version has more feature like a maximum wait time,
// leading and trailing function invoking.
// It has also been tested on every major browser and it has very good performance on every browser.
// You are also 100% sure that the Lodash version is bug free
export const debounce = (func: any, wait: any) => {
  let timeout: any = null;
  return (...args: any) => {
    const context: any = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export const REPEAT_MODE = ['off', 'track', 'context'];
