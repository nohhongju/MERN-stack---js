import React from 'react'

export function Nav(){

  return (
    <>
    <div>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </div>
    <div className="w3-top">
  <div className="w3-bar w3-black w3-card">
    <a href="/" className="w3-bar-item w3-button w3-padding-large">HOME</a>
    <div className="w3-dropdown-hover w3-hide-small">
      <button className="w3-padding-large w3-button" title="More">Article <i className="fa fa-caret-down"></i></button>     
      <div className="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="/board/addArticle" className="w3-bar-item w3-button">글쓰기</a>
        <a href="/board/getArticle" className="w3-bar-item w3-button">목록</a>
      </div>
    </div>
  </div>
</div>
</>
  );
}