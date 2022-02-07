import {StyledImage, FrameWrapper} from './primitives';

export type PhotoFrameProps = {
  letter: string;
  source: string;
  title: string
}

function PhotoFrame(props: PhotoFrameProps) {
  return (
    <FrameWrapper>
      <h2>{props.title}</h2>
      <StyledImage src={props.source}></StyledImage>
      <h2>Photo {props.letter}</h2>
    </FrameWrapper>
  );
}

export default PhotoFrame;