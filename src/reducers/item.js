const reducer = (state={
    cromPraised: false
  }, action) => {
  switch(action.type) {
    case "PRAISE_CROM": {
      return {
        cromPraised: action.cromPraised
      }
    }
  }
  return state
}
