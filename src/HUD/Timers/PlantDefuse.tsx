import React from "react";

import { Timer } from "../MatchBar/MatchBar";
import { Player } from "csgogsi";
import * as I from "./../../assets/Icons";
import Lottie from "lottie-react";
import BombPlant from '../lotties/bomb_plant.json'
import BombDefuese from '../lotties/bombdefuse5sec.json'

interface IProps {
  timer: Timer | null;
}

export default class Bomb extends React.Component<IProps> {
  getCaption = (type: "defusing" | "planting", player: Player | null) => {
    if(!player) return null;
    if(type === "defusing"){
      return <>
        {/* <I.Defuse height={22} width={22} fill="var(--color-new-ct)" /> */}
        <Lottie animationData={BombDefuese} loop={true} />
        <div className={'Text'}>{player.name} is defusing the bomb</div>
      </>;
    }
    return <>
      {/* <I.SmallBomb height={22} fill="var(--color-new-t)"/> */}
      <Lottie animationData={BombPlant} loop={true} />
      <div className={'Text'}>{player.name} is planting the bomb</div>
    </>;
  }
  render() {
    const { timer } = this.props;
    return (
      <div className={`defuse_plant_container ${timer && timer.active ? 'show' :'hide'}`}>
        {
          timer ?
          <div className={`defuse_plant_caption`}>
            {this.getCaption(timer.type, timer.player)}
          </div> : null
        }
          
          {/* <div className="defuse_plant_bar" style={{ width: `${(timer && timer.width) || 0}%` }}></div> */}
      </div>
    );
  }
}
