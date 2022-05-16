import React, {useEffect, useState} from 'react';
import axios from "axios";
import { GetArticle } from '@/components/board/GetArticle';

const GetArticlePage= () => {
    const columns = ["beans", "roast", "origin", "flavor", "acidity"];
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/board/list').then(res=>{
            setData(res.data.boards)
        }).catch(err=>{})
    },[])
    return(
    <GetArticle columns={columns} colspan={5} data={data} />
  )
}
export default GetArticlePage