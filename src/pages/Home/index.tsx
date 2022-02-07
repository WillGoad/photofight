

import { VerticalWrapper, HorizontalWrapper } from './primitives';
import PhotoFrame from '../../components/photoFrame';
import TreesJSON from '../../trees.json';
import VegJSON from '../../veg.json';
import { useState, useEffect } from 'react';
import DieHolder from '../../components/dieHolder';

function Home() {

  const [imageSources, setImageSources] = useState<string[]>(["https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"]);
  const [scores, setScores] = useState<number[]>([0,0]);
  const [winner, setWinner] = useState<string>('A');
  function getNewImages() {
    const randNum1: string = Math.floor(Math.random() * 3).toString();
    const randNum2: string = Math.floor(Math.random() * 3).toString();
    let tempSources: string[] = imageSources;
    if(randNum1 === "0") {
      tempSources[0] = TreesJSON.trees[0].source;
    } else if(randNum1 === "1") {
      tempSources[0] = TreesJSON.trees[1].source;
    } else if(randNum1 === "2") {
      tempSources[0] = TreesJSON.trees[2].source;
    }
    if(randNum2 === "0") {
      tempSources[1] = VegJSON.veg[0].source;
    } else if(randNum2 === "1") {
      tempSources[1] = VegJSON.veg[1].source;
    } else if(randNum2 === "2") {
      tempSources[1] = VegJSON.veg[2].source;
    }
    setImageSources(tempSources);
    console.log(imageSources[0]);
  }


  function compareScores(side: string, total: number) {
    var tempScores = scores;
    if(side === 'left') {
      tempScores[0] = total;
      setScores(tempScores);
    } else {
      tempScores[1] = total;
      setScores(tempScores);
    }
    if(scores[0] > scores[1]){
      setWinner('A');
    } else {
      setWinner('B');
    }

  }

  return (
    <VerticalWrapper>
      <h1>Photo Fight</h1>
      <HorizontalWrapper>
        <PhotoFrame letter="A" title="Tree" source={imageSources[0]} />
        <VerticalWrapper>
          <h2>VS</h2>
          <HorizontalWrapper>
            <DieHolder side='left' compareScores={compareScores}/>
            <h2>Photo {winner} Wins!</h2>
            <DieHolder side='right' compareScores={compareScores}/>
          </HorizontalWrapper>
          <button onClick={getNewImages}>FIGHT</button>
        </VerticalWrapper>
        <PhotoFrame letter="B" title="Vegetables" source={imageSources[1]} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

export default Home;