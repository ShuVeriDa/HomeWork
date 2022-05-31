import React, {useCallback, useEffect, useRef, useState} from 'react'
import classes from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
   onChangeRange?: (value: [number, number]) => void
   value?: [number, number]
   min: number
   max: number
   // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
   {
      onChangeRange, value,
      min, max
      // min, max, step, disable, ...
   }
) => {
   const [minVal, setMinVal] = useState(min);
   const [maxVal, setMaxVal] = useState(max);
   const minValRef = useRef(min);
   const maxValRef = useRef(max);
   const range = useRef(null);

   return (
      <div className={classes.container}>
         <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
               const value = Math.min(Number(event.target.value), maxVal - 1);
               setMinVal(value);
               minValRef.current = value;
            }}
            className={`${classes.thumb} ${classes.thumbLeft}`}
            // style={{ zIndex: minVal > max - 100 && "5" }}
         />
         <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
               const value = Math.max(Number(event.target.value), minVal + 1);
               setMaxVal(value);
               maxValRef.current = value;
            }}
            className={`${classes.thumb} ${classes.thumbRight}`}
         />

         <div className={`${classes.slider}`}>
            <div className={`${classes.sliderTrack}`} />
            <div ref={range} className={`${classes.sliderRange}`} />
            <div className={`${classes.sliderLeftValue}`}>{minVal}</div>
            <div className={`${classes.sliderRightValue}`}>{maxVal}</div>
         </div>
      </div>
   );
};

export default SuperDoubleRange
