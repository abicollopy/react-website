import React, { useState } from 'react';
import './TodoContainer.css';
import ListItems from './components/ListItems';

export default () => {
    const [count, setcount] = useState(0);
    const [list, setlist] = useState([
        {
            text: "text",
            completed: false
        },
        {
            text: "text two",
            completed: false
        }
    ]);
    function toggle(boo: any) {
        return boo == true ? false : true;
      }
    return (
        <div className="TodoContainer">
            <div className="Insides"> To do 
            <button className="Insidesbutton" onClick={
                () => {
                    setcount(count + 1);
                }
            }> PRESS ME {count} </button>
            {
                list.map((item, index)=>{
                    return(
                        <ListItems text={item.text} onDelete={()=>{
                            const start = list.slice(0, index);
                            const end = list.slice(index + 1, list.length);
                            setlist([...start, ...end]);
                        }}
                        onClick={()=>{

                        }} />
                    );
                })
            }
            </div>
        </div>
    );
}