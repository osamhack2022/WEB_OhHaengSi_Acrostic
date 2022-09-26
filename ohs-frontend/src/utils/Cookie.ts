import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setCookie(name: string, value: string, option?: any) {
  return cookies.set(name, value, { ...option });
}

export function getCookie(name: string) {
  return cookies.get(name);
}
