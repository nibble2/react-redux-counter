// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생섬함수 정의
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
  number: 0,
};

// **** 리듀서 작성
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
