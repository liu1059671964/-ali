import React,{useState,useEffect,useRef} from 'react';
import {getList} from '../../utils/http'
import {ListWrap} from './liststyled'
// import { Carousel } from 'antd';
const List = (props)=> {
    // debugger
    // https://api.myjson.com/bins/zp6s0
    const [datalist, setdatalist] = useState([]);
    const nameRef = useRef();
    (function ref(){
        if(nameRef.current){toTop()}
    })()
    function toTop(){
        if(nameRef.current){
            let meici =  2;

        let timer = setInterval(() => {
            nameRef.current.scrollTop =nameRef.current.scrollTop - meici;
            if (nameRef.current.scrollTop <= 0) {
                nameRef.current.scrollTop=152
            }
            // console.log(nameRef.current.scrollTop)
        }, 10)
        }
        
    }
    useEffect(()=>{
         (async ()=>{
            let res =  await getList('https://api.myjson.com/bins/zp6s0')
            console.log(res.data.list)
            setdatalist(
                res.data.list
            )
        })()
    }
       
    ,[])
    return (
        <ListWrap>
            <div className='top'>
                <span>更新职位</span>
                <p>更多</p>
            </div>
            <div className='bot'>
                <ul ref={nameRef}>
                    {/* <Carousel autoplay
                        effect='scrolly'
                    > */}
                    {datalist.map(item=>(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <h3>{item.city}</h3>
                            <h4>{item.time}</h4>
                        </li>
                    ))}
                    {/* </Carousel> */}
                </ul>  
            </div>
        </ListWrap>
    );
}

export default List;