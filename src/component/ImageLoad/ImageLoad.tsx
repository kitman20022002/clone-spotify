import React, { useState, useEffect } from 'react';
import './ImageLoad.css';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';

interface IImageLoadProps {
  src: any;
  placeholder?: string;
  alt?: string;
  classes?: string;
  imgRound?: boolean;
}

const ImageLoad = React.memo((props: IImageLoadProps) => {
  const { src, placeholder, alt, classes, imgRound } = props;
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder && '');

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  const res = loading ? (
    <div className={imgRound ? 'temp round' : 'temp'}>
      <MusicNoteOutlinedIcon />
    </div>
  ) : (
    <img
      src={currentSrc}
      className={classes}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: 'opacity .15s linear',
      }}
      alt={alt}
    />
  );
  return res;
});

export default ImageLoad;
