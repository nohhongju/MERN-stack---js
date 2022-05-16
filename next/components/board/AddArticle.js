import * as React from 'react';
import Button from '@mui/material/Button';
import Head from 'next/head';

export function AddArticle({onChange, onSubmit}){
    return(
        <>
        <Head>
        <title>Article | 게시물작성 </title>
        </Head>
        <div className="w3-container w3-content w3-padding-64" id="contact">
        <h2 className="w3-wide w3-center">CONTACT</h2>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6">
          <form action="/action_page.php" 
                target="_blank" 
                onSubmit={onSubmit}>
          <div>
              <input className="w3-input w3-border" 
                      type="text"
                      placeholder="Beans" 
                      required 
                      name="beans" 
                      id="beans" 
                      style={{margin:"0px -16px 10px -0px"}} 
                      onChange={onChange}/>
          </div>
          <div>
              <input className="w3-input w3-border" 
                      type="text" 
                      placeholder="Roast"
                      required name="roast"
                      id="roast" 
                      style={{margin:"0px -16px 10px -0px"}} 
                      onChange={onChange}/>
          </div>
          <div>
              <input className="w3-input w3-border" 
                      type="text" 
                      placeholder="Origin"
                      required name="origin"
                      id="origin" 
                      style={{margin:"0px -16px 10px -0px"}} 
                      onChange={onChange}/>
          </div>
          <div>
              <input className="w3-input w3-border" 
                      type="text" 
                      placeholder="Flavor" 
                      required 
                      name="flavor" 
                      id="flavor" 
                      style={{margin:"0px -16px 10px -0px"}} 
                      onChange={onChange}/>
          </div>
          <div>
              <input className="w3-input w3-border" 
                      type="text" 
                      placeholder="Acidity"
                      required name="acidity"
                      id="acidity" 
                      style={{margin:"0px -16px 10px -0px"}} 
                      onChange={onChange}/>
          </div>
            <button className="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
          </form>
        </div>
        </div>
      </div>
        </>
    )
}