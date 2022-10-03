# 오행시 백엔드 프로젝트

## 설명

오행시의 Nestjs 기반 REST API 서버입니다.

## 설치

```bash
$ npm install
```

## 실행

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 테스트

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# API 설명
## 사용자 생성
**로그인 필요**
관리자용 사용자를 생성한다.
```http
POST /auth/users
```
```json
{
    "username": "user2",
    "password": "user2",
    "name": "서중대장",
    "rank": "중대장"
}
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. 접속을 위한 사용자 계정명 |
| `password` | `string` | **Required**. 접속을 위한 사용자 계정 비밀번호 |
| `name` | `string` | **Required**. 표시될 사용자 명칭 |
| `rank` | `string` | **Required**. 표시될 사용자 계급 |

## Responses
생성된 사용자 정보를 반환한다.

```javascript
{
    "username": string,
    "password": string,
    "name": string,
    "rank": string,
    "id": number
}
```
예시
```json
{
    "username": "user2",
    "password": "$2b$10$j5TjdK8yOlLEbhNYrMyn3eSaEHpxYVgOk5HSmrFOIy0mDH.Jov9zq",
    "name": "서중대장",
    "rank": "중대장",
    "id": 2
}
```


---
## 사용자 로그인

등록된 사용자 인증를 처리하고 완료시 JWT 토큰을 반환한다.
해당 토큰을 이용해 인증이 필요한 요청을 처리한다.
```http
POST /auth/login
```
```json
{
    "username": "admin",
    "password": "admin",
}
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. 접속을 위한 사용자 계정명 |
| `password` | `string` | **Required**. 접속을 위한 사용자 계정 비밀번호 |

## Responses
인증된 사용자의 접속 토큰을 제공한다.

응답 예시
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTY2NDc3MDU2NywiZXhwIjoxNjY0NzcwNjI3fQ.Jw4vrqhUzMmp4eHffMFDQSTz8f9IQISQhYPHOcww-nU"
}
```


---
## 생활관 정보 요청

특정 생활관의 인원 현황을 요청한다.
```http
GET /room/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | **Required**. 생활관 고유 ID |

## Responses
요청한 생활관의 인원 현황을 반환한다.

<details>
<summary>
응답 예시
</summary>

```json
{
    "room": {
        "id": 2
    },
    "members": [
        {
            "name": "김병장",
            "rank": 4,
            "rank_name": "병장",
            "status": "휴가"
        },
        {
            "name": "박일병",
            "rank": 2,
            "rank_name": "일병",
            "status": "열중"
        },
        {
            "name": "정상병",
            "rank": 3,
            "rank_name": "상병",
            "status": "기타"
        }
    ],
    "summary": {
        "total": 8,
        "absence": 3,
        "current": 5,
        "absence_reasons": [
            [
                "휴가",
                1
            ],
            [
                "기타",
                1
            ],
            [
                "근무",
                1
            ]
        ]
    }
}
```

</details>



---
## 근무표 요청

특정 날짜의 근무표를 요청한다.
```http
GET /roster/:date
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `date` | `string` | **Required**. 요청할 근무표의 날짜 ex) 2022-10-10 |

## Responses
요청한 날짜의 근무표를 반환한다.

<details>
<summary>
응답 예시
</summary>

```json
{
    "date": "2022-07-08",
    "rosters": [
        {
            "name": "상황병",
            "works": [
                {
                    "name": "지휘통제실",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                },
                {
                    "name": "지휘통제실",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                },
                {
                    "name": "지휘통제실",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                }
            ]
        },
        {
            "name": "불침번",
            "works": [
                {
                    "name": "22:00~00:00",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                },
                {
                    "name": "22:00~00:00",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                },
                {
                    "name": "22:00~00:00",
                    "memeber": [
                        {
                            "name": "박일병",
                            "rank": 2,
                            "rank_name": "일병"
                        },
                        {
                            "name": "정상병",
                            "rank": 3,
                            "rank_name": "상병"
                        }
                    ]
                }
            ]
        }
    ]
}
```

</details>



---
## 임무분담제 요청

특정 날짜의 특정 생활관의 임무분담제 내용을 요청한다.
```http
GET /roster/:room/:date
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `room` | `number` | **Required**. 요청할 생활관 ID |
| `date` | `string` | **Required**. 요청할 근무표의 날짜 ex) 2022-10-10 |

## Responses
요청내용에 맞는 임무분담제 정보를 반환한다.

<details>
<summary>
응답 예시
</summary>

```json
{
    "room": "2",
    "date": "2022-07-08",
    "byRoom": [
        [
            "청소구역1",
            1,
            2,
            3,
            4
        ],
        [
            "청소구역2",
            1,
            2,
            3,
            4
        ],
        [
            "청소구역3",
            1,
            2,
            3,
            4
        ],
        [
            "청소구역4",
            1,
            2,
            3,
            4
        ],
        [
            "청소구역5",
            1,
            2,
            3,
            4
        ]
    ],
    "inRoom": [
        [
            "청소구역1",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역2",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역3",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역4",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역5",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역6",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ],
        [
            "청소구역7",
            "김일병",
            "박이병",
            "이상병",
            "진병장"
        ]
    ]
}
```

</details>


---
## 전파사항 목록 요청

전파사항 목록을 반환한다.

```http
GET /notice?date=2022-10-21
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `date` | `string` | **Optional**. 전파사항 작성일. 제공되지 않으면 전체 전파사항 반환 ex) 2022-10-10 |

## Responses
요청 정보와 함께 요청 정보에 맞는 전파사항을 반환한다.

<details>
<summary>
응답 예시
</summary>

```json
{
    "query": {
        "date": "2022-10-17"
    },
    "items": [
        {
            "type": "notice",
            "title": "[지휘통제실] 막사 내 보안 규정 안내",
            "content": "제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.\n    \n          모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.",
            "writer": {
                "name": "행정보급관"
            },
            "createdAt": "2022-10-10 10:01:23"
        },
        {
            "type": "normal",
            "title": "[지휘통제실] 막사 내 보안 규정 안내",
            "content": "제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.\n    \n          모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.",
            "writer": {
                "name": "행정보급관"
            },
            "createdAt": "2022-10-10 10:01:23"
        }
    ]
}
```

</details>


---
## 전파사항 요청

특정 전파사항의 상세 내용을 반환한다.

```http
GET /notice/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | **Required**. 응답할 전파사항의 ID |

## Responses
해당 전파사항을 반환한다.

<details>
<summary>
응답 예시
</summary>

```json
{
    "type": "normal",
    "title": "[지휘통제실] 막사 내 보안 규정 안내",
    "content": "제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.\n\n      모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.",
    "writer": {
        "name": "행정보급관"
    },
    "createdAt": "2022-10-10 10:01:23"
}
```

</details>

# 라이센스

[MIT licensed](LICENSE).
