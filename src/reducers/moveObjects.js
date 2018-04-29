function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;
  const grx = x;
  const gry = y;
  return {
    ...state,
    grx,
    gry
  };
}

export default moveObjects;