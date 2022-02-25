# <img src="https://user-images.githubusercontent.com/76507701/154678507-0688fbe5-36b9-4c45-8d07-9566eb3f3612.png"  width="25" height="25" margin-right="10px"/> GitFarm
### 깃 잔디를 풍성하게 심도록 도와주는 GitHub 관리 웹 앱
<br />

<div align='center'>

<img src="https://user-images.githubusercontent.com/76507701/154678151-bbbce31d-6065-4e98-893b-a5e427e82024.png">

</div>




## :book: 프로젝트 소개

- GitFarm 은 Git + Farm의 합성어로 농장을 컨셉으로 하여 Git 잔디 관리를 즐겁게 할 수 있도록 도와주는 서비스입니다.

<br />

## :bulb: 프로젝트 기획 의도

- 불특정 다수에게 필요한 서비스도 좋지만, 그러한 서비스를 개발하는 개발자들을 위해 도움이 되는 서비스를 만들고 싶었습니다. 개발자로 일하기 위해서는 꾸준히 공부를 해야 하는데, 공부한 내용을 기록으로 남길 때 1일 1커밋을 주로 이용합니다. 목표를 설정하고 목표를 달성했을 때 성취감을 주기 위해 이와 같은 프로젝트를 기획하게 되었습니다.

<br />

## :nut_and_bolt: 서비스 주요 기능

### 메인 기능
| 농장꾸미기 | 월간 그래프 | 캘린더 |
| ------ | ------ | ------ |
| <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155487805-60cffda1-08b3-4546-aa00-423785d505e5.png"  width="200px" height="400px"/></div> | <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155487936-c496276e-ab1f-4953-ad7c-7d3917bd18aa.png"  width="200px" height="400px"/></div> | <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488110-49239060-aa52-4a2a-ba62-bbd6e42509b1.png"  width="200px" height="400px"/></div> |
| 유저가 목표로 한 일일 커밋양에 비례하여 농장이 점차 채워집니다. (비율 하단 참고) | 월간 그래프를 통해 나의 커밋 통계를 확인합니다. 나의 언의 사용 현황도 확인이 가능합니다. | 월별 캘린더를 통해 커밋 여부와 갯수를 한눈에 확인합니다. 
<details><summary>농장 비율에 따른 이미지 보기</summary>
- 오늘의 농장 완성 비율: 0%, 20%, 40%, 60%, 80%, 100%
  <div align='center'><img src="https://user-images.githubusercontent.com/76507701/154740168-05e06041-e549-48dc-aae5-9a9c439e8d6f.png"/></div>
</details>

### 서브 기능
| Github 로그인 | GitFarm 순위 확인 | 레벨 시스템 |
| ------ | ------ | ------ |
| <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488606-0e466bdc-bf80-467e-b98a-9174f22af191.png"  width="200px" height="400px"/></div> | <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488898-8d6b549c-c8da-438f-80c0-a4a15b622dcd.png"  width="200px" height="400px"/></div> |<div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488651-d343904c-9310-4fdc-8927-349af53a9afa.png"  width="200px" height="400px"/></div>| 
| Github OAuth로 로그인합니다. | Top10 유저 목록과 나의 순위를 확인할 수 있습니다. | 점수표에 따라 나의 레벨이 정해집니다. (점수 기준 하단 참고) | 
<details><summary>점수표</summary>

| 농장      | 총 커밋 수 |
| --------- | ---------- |
| 씨앗      | 0 ~ 100    |
| 초보 농부 | 100 ~ 349  |
| 중수 농부 | 350 ~ 849  |
| 고수 농부 | 850 ~ 1649 |
| 팜 마스터 | 1650 ~     |

| 레벨  | 경험치 |
| ----- | ------ |
| 커밋  | 10     |
| Issue | 5      |
| PR    | 10     |

</details>

| 다양한 뱃지 획득 | 유저 정보 확인 | 목표커밋, 다짐 설정 |
| ------ | ------ |------ |
| <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488660-fb104dd4-3258-4518-8c7a-8b1f7161395a.png"  width="200px" height="400px"/></div>| <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488628-f967df4c-3898-4ade-a22c-8f6af90cd5fb.png"  width="200px" height="400px"/></div>| <div align='center'><img src="https://user-images.githubusercontent.com/76507701/155488682-7a001859-0d08-4f7f-a2bd-b18b3f0adc83.png"  width="200px" height="400px"/></div>|
| 특정 목표를 달성하면 뱃지를 받을 수 있습니다. | 유저가 자신의 레벨, 총 커밋수 등의 정보를 확인할 수 있습니다. | 유저가 목표커밋 및 다짐을 설정할 수 있습니다. |

####  추가적으로 반응형 디자인으로 고려하여 PC버전의 화면을 구현했습니다.
<details><summary>반응형 디자인</summary>
  <div align='center'><img src="https://user-images.githubusercontent.com/76507701/154742634-b863d29b-c70a-49f4-aa01-57239ef5426f.png"/></div>
</details>

<br/>

### 프로젝트만의 차별점, 기대 효과

- 기존 Github 페이지에서 제공하는 잔디 그래프 형태로 데이터를 제공하는 대신, 캘린더와 라인 차트 형태로 데이터를 제공하기 때문에 유저가 좀 더 쉽게 데이터를 확인할 수 있습니다.

- 서비스 자체의 캐릭터와 일일 커밋 수에 따라 채워지는 농장을 도입하여 유저에게 게임을 하는 듯한 느낌을 줄 수 있습니다. 이는 유저의 오락적 요소를 자극할 수 있습니다.

- 랭킹 시스템을 도입하여 유저들간의 선의의 경쟁을 유도할 수 있습니다.

<br />

## :newspaper: 프로젝트 구성도

### 사용 스택

![stack](https://user-images.githubusercontent.com/76507701/154674596-7e760aad-4694-4ef9-9f13-9e21facd10f9.png)

### 프로젝트 구조도

![architecture](https://user-images.githubusercontent.com/76507701/155487920-b65771b1-c6a5-48ba-a6f4-5b5df31735cc.png)

### 와이어프레임

- [GitFarm](https://www.figma.com/file/6ibd1kSFY9jgqtsztGmTOh/GitFarm?node-id=0%3A1)

### 스토리보드

- [GitFarm 아카이브](https://www.notion.so/elice/952c76c7fd544f09be980c7fe8b3ed87)
<br />

## 🧑‍🤝‍🧑 프로젝트 팀원 역할 분담
| 이름   | 역할                   |
| ------ | ---------------------- |
| 안영우 | 팀장/백엔드 개발 |
| 김유림 | 프론트엔드 개발  |
| 서지영 | 프론트엔드 개발  |
| 정진원 | 백엔드 개발      |
| 황원준 | 프론트엔드 개발  |

### 파트별 역할

#### 프론트엔드

- 기획 단계: 아이디어 회의 및 figma를 활용한 와이어프레임 작성
- 개발 단계: 페이지별로 개발파트를 분담하여 각 페이지에 필요한 컴포넌트 제작 및 페이지 제작
- 수정 단계: 코치님의 피드백 및 백엔드의 API 관련 피드백을 반영해서 페이지 구조 및 일부 기능 수정

#### 백엔드

- 기획 단계: 아이디어 회의 및 API와 백엔드 구조 기획
- 개발 단계: Third party API인 Github API를 사용해서 원하는 데이터로 가공 및 이를 DB에 저장시켜 프론트에서 호출 할 수 있게 API 개발
- 수정 단계: 코치님의 코드리뷰 피드백 및 프론트엔드 팀원들의 속도, 데이터 관련 피드백 반영해서 Schema 구조, API설계와 외부 API 사용 방식 수정
