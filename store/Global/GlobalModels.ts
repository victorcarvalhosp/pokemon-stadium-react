export interface GlobalState {
    turnedOn: Readonly<boolean>,
    showContent: Readonly<boolean>,
    actualScreen: Readonly<GameScreen>,
}

export enum GameScreen {
    None = 'NONE',
    Intro = 'Intro',
    Title = 'Title',
    MainMenu = 'MainMenu',
    StadiumMenu = 'StadiumMenu'
}
