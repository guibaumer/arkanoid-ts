'use client'

import { Game } from "@/classes/Game";
import { RowsArray } from "../interfaces/interfaces";
import Blocks from "@/components/Blocks/Blocks";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [game, setGame] = useState<Game | null>();
  const [rows, setRows] = useState<RowsArray>([]);
  const [running, setRunning] = useState<boolean>(false);
  const stoppedGameRef = useRef<boolean | null>(null);
  const [didLose, setDidLose] = useState<boolean>(false);
  const [didWin, setDidWin] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(1);

  const startGame = (level: number) => {
    if (!game) {
      const newGame = new Game();
      setGame(newGame);
      setRows(newGame.defineBlocks(level));
      stoppedGameRef.current = newGame.stoppedGame;
    } else {
      setRows(game.defineBlocks(level));
      setDidLose(false);
      setDidWin(false);
      game.start();
      stoppedGameRef.current = game.stoppedGame;
    }
    setRunning(true);
  };

  useEffect(() => {
    if (!game || !running) return;
    setTimeout(() => {
      game.computeBlocksProps();
    }, 1);
  }, [running]);

  useEffect(() => {
    didLose && console.log('PERDEU')
    setLevel(1);
  }, [didLose]);

  useEffect(() => {
    didWin && setLevel(prev => prev + 1);
  }, [didWin]);

  useEffect(() => {
    if (!game) return;
    const checkStoppedGame = () => {
      if (game.stoppedGame !== stoppedGameRef.current) {
        stoppedGameRef.current = game.stoppedGame;
        if (document.querySelector('.block')) {
          setDidLose(true);
        } else {
          setDidWin(true);
        }
        setRunning(false);
      }
    };
    const intervalId = setInterval(checkStoppedGame, 100); 
    return () => clearInterval(intervalId); 
  }, [game]);

  return (
    <>
    {/* <p>RUNNING: {running ? 'TRUE' : 'FALSE'}</p> */}
    {/* <p>DID LOSE: {didLose ? 'TRUE' : 'FALSE'}</p> */}
    {/* <p>DID WIN: {didWin ? 'TRUE' : 'FALSE'}</p> */}
    <p>LEVEL: {level}</p>
    
    <div className="container" id="container">
      {!running && level === 1 && <button type="button" className="button" onClick={() => startGame(level)}>START</button>}
      {!running && level > 1 && <button type="button" className="button" onClick={() => startGame(level)}>START LEVEL {level}</button>}
      {running && <Blocks rows={rows} didLose={didLose} />}
    </div>
    </>
  );
}
 