# Noroff FEU - JavaScript Frameworks Course Assignment



## Start up project

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Comments on the project

The assignment text for Level 3 says:

> On the home and game details page the game(s) should be retrieved from the global state, not API calls.

I am interpreting this as "not directrly hitting the endopoint from the component", since the data from the "all games" does not include a description property. ANyways, if I were to fetch all the data on the initial load and only use that, I would've done something like this:

```javascript
export const fetchOneGame = (gameId) => {
  return (dispatch, getState) => {
    const gameOrEmptyString = getState().games.find(game => game.id === +gameId) || "";
    dispatch({
      type: FETCH_ONE_GAME,
      payload: gameOrEmptyString
    })
  }
}
```