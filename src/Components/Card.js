import React from 'react'

 export const Card = ({data}) => {
    console.log(data)
  return (
    <div className='card'>
        {data.map((curItem,index)=>{
            if(!curItem.urlToImage){
               return null
            }else{
            return(
                <div className='Card '>
                 <img src={curItem.urlToImage}/>
                 <div className='content'>
                    <a  className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                    <p className='des'>{curItem.description}</p>
                    <button className='read' onClick={()=>window.open(curItem.url)}>READ MORE</button>

 
                 </div>
                </div>
            )}
        })}
    </div>
  )
};
export default Card;
