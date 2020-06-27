
export interface IPokemon {
  id: string;
  name: string;
  variety: number;
  level: number;
  task: string;
  date?: Date;
  actualHp: number;
  hp: number;
  atk: number;
  def: number;
  speed: number;
  ivHp: number;
  ivAtk: number;
  ivDef: number;
  ivSpeed: number;
  moves: number[];
  shiny?: boolean;
  gigantamax?: boolean;
}

export class Pokemon implements IPokemon{
  id: string;
  name: string;
  variety: number;
  level: number;
  task: string;
  date?: Date;
  actualHp: number;
  hp: number;
  atk: number;
  def: number;
  speed: number;
  ivHp: number;
  ivAtk: number;
  ivDef: number;
  ivSpeed: number;
  moves: number[];
  shiny?: boolean;
  gigantamax?: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.variety = 0;
    this.level = 0;
    this.task = '';
    this.actualHp = 0;
    this.hp = 0;
    this.atk = 0;
    this.def = 0;
    this.speed = 0;
    this.ivHp = 0;
    this.ivAtk = 0;
    this.ivDef = 0;
    this.ivSpeed = 0;
    this.moves = [];
    this.shiny = false;
    this.gigantamax = false;
  }

}
