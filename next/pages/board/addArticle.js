import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { addArticleRequest } from '@/modules/board/addArticle';
import { AddArticle } from '@/components';


const AddArticlePage = () => {
    const [board, setBoard] =useState({
        beans:'', roast:'', origin:'', flavor:'', acidity:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setBoard({...board,[name]: value})
    }
    const onSubmit = e =>{
        e.preventDefault()
        alert('게시물작성:'+JSON.stringify(board))
        dispatch(addArticleRequest(board))
    }
  return (
    <AddArticle onChange={onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({isAddArticled: state.addArticle.isAddArticled})
const addArticleActions = {addArticleRequest}
export default connect(mapStateToProps, addArticleActions)(AddArticlePage)