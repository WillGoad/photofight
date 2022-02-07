import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { useState } from 'react';

import { ScoreWrapper } from './primitives';

export type DieHolderProps = {
    compareScores: (side: string, total: number) => void;
    side: string;
}

function DieHolder(props: DieHolderProps) {
    const [score, setScore] = useState(0);

    function rollDoneAction(total: any) {
        console.log(total);
        setScore(total);
        props.compareScores(props.side, total);
    }

    


    return (
        <ScoreWrapper>
            <ReactDice
                numDice={2}
                faceColor='#ffffff'
                outline='#000000'
                dotColor='#000000'
                rollTime='2'
                rollDone={rollDoneAction}
            />
            <h2>{score}</h2>
        </ScoreWrapper>
    );
}



export default DieHolder;