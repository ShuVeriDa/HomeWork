import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";

function HW12() {
   const themes = useSelector<AppStoreType, string[]>(state => state.themes.themes)
   const theme = useSelector<AppStoreType, string>(state => state.themes.value)
   const dispatch = useDispatch()

   const [value, setValue] = useState<string>(theme)
   const onChangeCallback = (theme: string) => {
      dispatch(changeThemeC(theme))
      setValue(theme)
   }

   const bgColor = value === 'dark' ? s.dark : '' || value === 'red' ? s.red : '' || value === 'some' ? s.some: ""
   const color = value === 'dark' ? s.darkText : '' || value === 'red' ? s.redText : '' || value === 'some' ? s.someText : ""

    return (
        <div className={bgColor}>
            <hr/>
            <span className={color}>
                homeworks 12
            </span>
            <div className={color}>
               <h3>Option: {theme}</h3>
               <SuperRadio
                  className={bgColor}
                  name={'radio'}
                  options={themes}
                  value={value}
                  onChangeOption={onChangeCallback}
               />
            </div>


            <hr/>
        </div>
    );
}

export default HW12;
