# redux 연습 [counter app]

## redux 핵심개념
1. store(저장소) : 모든 상태를 저장하는 중앙 저장소
2. action(행동) : 상태를 어떻게 변경할지 알려주는 신호
3. reducer(변경로직) : action을 받아서 store의 상태를 변경하는 함수
- payload : reducer에서 사용할 값을 담아서 보내는 역할\


## redux 프로세스
컴포넌트 -> action -> reducer -> store -> 컴포넌트

- action -> reducer :: dispatch메소드 사용해서 넘김

## @reduxjs/toolkit
### createSlice
- slice : Redux state의 일부분을 나타내며, 관련된 action과 reducers를 그룹화한 것
- 각 slice는 해당 slice의 state와 이를 변경하는 로직을 캡슐화함.
- createSlice() : slice의 이름, 초기상태, slice가 처리할 reducers를 정의하는 객체를 인자로 받음
- action과 reducer를 한번에 만들 수 있음
- payload : reducer에서..

### createSlice 주요 속성
- name : 해당 slice의 이름
- initialState : 이 slice가 관리하는 상태의 초기값
- reducers : 상태를 변경하는 함수 (이 안에서 state를 직접 변경 가능)

### configureStore
- redux store를 생성하는 함수


## react-redux
### useSelector(), useDispatch()
useSelector()로 상태를 가져오고, useDispatch()로 액션실행

#### useSelector() 기본구조
const value = useSelector((state) => state.[sliceName].[value]);
- state : redux 스토어 전체 상태
- [sliceName] : createSlice로 정의한 상태의 이름
- [value] : 해당 상태 안의 속성을 선택


\* Provider는 index.js에서 사용!