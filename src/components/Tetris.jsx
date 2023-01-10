import React, { useState } from 'react'

//components
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

import { createStage, checkCollision} from '../gameHelpers'

//styled components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

//custom hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

export default function Tetris() {

	const [dropTime, setDropTime] = useState(null)
	const [gameOver, setGameOver] = useState(false)

	const [player, updatePlayerPos, resetPlayer] = usePlayer();
	const [stage, setStage] = useStage(player, resetPlayer);

	const movePlayer = dir => {
          if(!checkCollision(player, stage, { x: dir, y: 0 })){
			updatePlayerPos({ x: dir, y: 0 }) //dir: -1 or 1
		}
	}

	const startGame = () => {
		//reset everything
		setStage(createStage());
		resetPlayer();
		setGameOver(false);
	}

	const drop = () => {
		if(!checkCollision(player, stage, { x: 0, y: 1 })){
			updatePlayerPos({ x: 0, y: 1, collided: false });
		}
		else {
			//game over
			if(player.pos.y < 1){
				console.log("GAME OVER!!!");
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	}

	const dropPlayer = () => {
		drop();
	}

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1)
			} else if (keyCode === 39) {
				movePlayer(1)
			} else if (keyCode === 40) {
				dropPlayer()
			}
		}
	}

	console.log('re-render')

  return (
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e=>move(e)}>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text="Game Over" />
					) : (
						<div>
							<Display text="Score" />
							<Display text="Rows" />
							<Display text="Level" />
						</div>
					)}
				  <StartBtn callback={startGame} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
  );
}
