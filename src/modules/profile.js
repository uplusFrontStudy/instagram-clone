// actions, constants, reducers

// 1. 액션 타입 정의
const UPDATE_IMAGE = 'profile/UPDATE_IMAGE';
const DELETE_IMAGE = 'profile/DELETE_IMAGE';

// 2. 액션 생성 함수 만들기
export const updateImage = (userId, image) => {
  return {
    type: UPDATE_IMAGE,
    userId,
    image,
  };
};

export const deleteImage = (userId) => {
  return {
    userId,
    type: DELETE_IMAGE,
  };
};

// 3-1. 초기 상태
const initialState = {
  image: null,
};

// 3-2. 리듀서 함수 만들기
function profile(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMAGE:
      return { ...state, image: action.image }; //
    case DELETE_IMAGE:
      return { ...state, image: null }; //
    default:
      return state;
  }
}
export default profile;
