# 프리온보딩 Assignment 3 - [jaranda]

## Objective

![화면 기록](https://user-images.githubusercontent.com/59982256/129191593-2d4fd9d9-d048-4567-9dab-aa6cfb7ee10e.gif)


<br>
<br>



## 1. 배포

> Netlify 무료배포 사이트를 이용하였습니다.

[배포 사이트 GO 🏄🏻] (https://cranky-allen-e2da94.netlify.app)

어드민 계정 정보 
| ID              | P/W           |
| ----------------|-------------- |
| admin@admin.com | string12      |

<br>
<br>


## 2. 설치 및 시작하는 법

이 프로젝트는 Create React App으로 생성되었습니다.

> This project was bootstrapped with Create React App.

#### `npm i`

프로젝트에 필요한 npm packages, node_modules 다운로드

#### `npm run start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000 입니다.

#### `npm run build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.
(cra 기본설정)


<br>
<br>


## 3. 담당 파트
회원가입(SignUp) 관련 및 Modal 팝업 컴포넌트 구현, Register 페이지 구성 및 api 연동


<br>
<br>

## 4. 프로젝트 폴더구조

```
📦 jaranda
💾 components 컴포넌트 구성요소
💾 config 전역 설정 파일(env)
💾 constants 프로젝트 내부에서 사용하는 공통 상수
💾 container unstated-next 기반의 공유 상태 관리 container
💾 hooks 공통적으로 사용되는 커스텀 hooks
💾 pages 각 Router 에 매칭되는 실제 Page
💾 Router 라우터 설정
💾 utils 공통 함수, apis 관리
```

<br>
<br>


## Reference

디자인 참조 - [피그마](https://www.figma.com/file/OL0x0hPOjonwF0Vl9jVuKD/Untitled?node-id=5%3A2)
