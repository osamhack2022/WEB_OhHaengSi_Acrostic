![ohs](https://user-images.githubusercontent.com/17894639/191040348-8a48203e-2ba4-4f03-bd77-d27710633ea5.jpg)

## 프로잭트 소개
'오행시'는 '오늘 행정반 소식'의 줄임말로 행정반 업무를 분담하는 전자 게시판입니다.
전파사항, 인원관리, 근무표 관리 같은 병영생활을 편리하고 효율적으로 처리할 수 있도록 합니다.

## 기능 설명
1. 생활관 인원 현황
2. 근무표
3. 임무분담제
4. 전파사항
5. 긴급

## 브랜치 전략
기본적으로 'git-flow'를 따르지만 해커톤 특성으로 경우에 따라 간략하게 이용할 수 있습니다.
 * master: 완성된 제품이 출시되는 브랜치
 * develop: 다음 버전을 개발하는 브랜치
 * feature: 개별 기능 브랜치 (develop 브랜치로 들어감)
 * release: 다음 버전 출시를 준비하는 브랜치. develop 브랜치에서 옮겨진 후 테스트를 거쳐 master로 합침
 * hotfix: master에서 발생한 버그를 바로 수정하는 브랜치

## 프로젝트 구성
 - ohs-frontend: 오행시 프론트엔드 프로젝트 디렉토리
 - ohs-backend: 오행시 백엔드 프로젝트 디렉토리

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used) 
### Server(back-end)
 - Node.js, TypeScript,
 - NestJS 
 - MariaDB 
 
### Front-end
 - React 
 - UI framework (추가예정)
 - 기타 사용한 라이브러리 (추가예정)

## 설치 안내 (Installation Process)
```bash
$ git clone git주소
$ yarn or npm install
$ yarn start or npm run start
```
 
## 팀 정보 (Team Information)
- Kim Suyoung (suyoung154@gmail.com), Github: kimpeupeu
- Kim Sunkyu (추가예정)

## 저작권 및 사용권 정보 (Copyleft / End User License
 * [MIT](https://github.com/kimpeupeu/WEB_OhHaengSi_Acrostic/blob/master/LICENSE)
This project is licensed under the terms of the MIT license.
