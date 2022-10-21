const baseUrl = "http://localhost:4000";

export function joinUrl(...paths: string[]) {
  if (paths.length == 0) return "";

  return (
    paths[0] +
    paths
      .slice(1)
      .reduce(
        (prev, cur) => (cur.startsWith("/") ? prev + cur : prev + "/" + cur),
        ""
      )
  );
}

export const DEFAULT_OPTIONS: RequestInit = {
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

function createOptions(options?: RequestInit, accessToken?: string) {
  const opts = options ?? DEFAULT_OPTIONS;

  if (accessToken) {
    opts.headers = { ...opts.headers, Bearer: accessToken };
  }

  return opts;
}

export async function get(
  url: string,
  options?: RequestInit,
  accessToken?: string
) {
  const response = await fetch(joinUrl(baseUrl, url), {
    ...createOptions(options, accessToken),
    method: "GET", // *GET, POST, PUT, DELETE 등
  });

  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

export async function post<T>(
  url: string,
  data: any,
  options?: RequestInit,
  accessToken?: string
) {
  const response = await fetch(joinUrl(baseUrl, url), {
    ...createOptions(options, accessToken),
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json() as T;
}

export async function patch<T>(
  url: string,
  data: any,
  options?: RequestInit,
  accessToken?: string
) {
  const response = await fetch(joinUrl(baseUrl, url), {
    ...createOptions(options, accessToken),
    method: "PATCH",
    body: JSON.stringify(data),
  });

  return response.json() as T;
}

export async function del<T>(
  url: string,
  data: any,
  options?: RequestInit,
  accessToken?: string
) {
  const response = await fetch(joinUrl(baseUrl, url), {
    ...createOptions(options, accessToken),
    method: "DELETE",
    body: JSON.stringify(data),
  });

  return response.json() as T;
}
