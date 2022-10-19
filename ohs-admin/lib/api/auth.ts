const baseUrl = "http://localhost:4000";

function joinUrl(...paths: string[]) {
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

async function get(url: string) {
  const response = await fetch(joinUrl(baseUrl, url), {
    method: "POST", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

async function post<T>(url: string, data: any) {
  const response = await fetch(joinUrl(baseUrl, url), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json() as T;
}

export interface IUser {
  username: string;
  name: string;
  rank: string;
  access_token: string;
}

export async function login(data: { username: string; password: string }) {
  return post<IUser>("auth/login", data);
}
