const SHOW_MODAL = 'profile/SHOW_MODAL';
const HIDE_MODAL = 'profile/HIDE_MODAL';

// 1. 액션 생성 함수
export const showModal = (element) => {
  return {
    type: SHOW_MODAL,
    payload: element,
  };
};
export const dropModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

// 2. 초깃값
const initState = {
  show: false, // 모달 표시 여부
  element: null, // 모달 내 컴포넌트
};

//3. 리듀서
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { show: true, element: action.type };
    case HIDE_MODAL:
      return { show: false, element: null };
    default:
      return state;
  }
}
