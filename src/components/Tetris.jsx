import React from 'react'
import { createStage } from '../gameHelpers'
//components
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'


export default function Tetris() {
  return (
	  <StyledTetrisWrapper>
		  <StyledTetris>
            <Stage stage={ createStage()} />
			<aside>
				<div>
					<Display text="Score" />
					<Display text="Rows" />
					<Display text="Level" />
                    </div>
                    <StartBtn />
			  </aside>
		</StyledTetris>	  					
		</StyledTetrisWrapper>
  );
}
