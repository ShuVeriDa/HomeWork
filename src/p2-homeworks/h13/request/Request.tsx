import React, {ChangeEvent, useEffect, useState} from 'react';
import {RequestAPI} from "../api/request-api";

export const Request = () => {
   const [check, setCheck] = useState<boolean>(false)

   useEffect(() => {
         RequestAPI.post(check)
         .then(res => res.data)
         .catch((error) => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
         })
   }, [check])

   const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
      setCheck(e.currentTarget.checked)
   }

   return (
      <div>
         <button>button</button>
         <input type="checkbox" onChange={onChangeChecked}/>
      </div>
   );
};