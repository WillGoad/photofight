import { VerticalWrapper,HorizontalWrapper } from './primitives';
import PhotoFrame from '../../components/photoFrame';

function Home() {
  return (
      <VerticalWrapper>
        <h1>Photo Fight</h1>
        <HorizontalWrapper>
          <PhotoFrame letter="A" title="Tree" source="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"/>
          <p>Input</p>
          <PhotoFrame letter="B" title="Vegetables" source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"/>
        </HorizontalWrapper>
      </VerticalWrapper>
  );
}

export default Home;