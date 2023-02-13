import React, { useState, useEffect } from 'react';
import "../css/Result.css";

function Tinhtulienquan(props) {
    const input = props.search ?  props.search : "";
    const data =  props.data ? props.data : [];
    const [datas, setDatas] = useState([]);
    
    useEffect(() =>  {
        const a = input;
        if(a !== ""){
            const callApiTinhtulienquan = async () => {
                const response = await fetch(`https://api.datamuse.com/words?rel_jjb=${input}`);
                const result = await response.json();
                console.log("result call api tinh tu lien quan: ", result);
                return result;
            }

            const a = callApiTinhtulienquan();
            setDatas(a);
            
        } else {
            return console.log("ô input chưa có giá trị")
        }
    }, []);

    return (
        <div className='main_css'>
            <p>Các từ tìm được</p>
            {
                data && data.length > 0 ? 
                <>
                    {
                        data.map((word, index) => {
                        return(
                            <div key={index} className='search'>
                                <div className='word_search'>
                                    <p>{index}.</p>  
                                    <div>{word.word} </div>
                                </div>
                                <div className='word_desc'>
                                    {word.numSyllables} - numSyllables
                                </div>
                            </div>   
                        )
                        })
                        
                    }
                </>
                : 
                <>
                {
                    datas && datas.length > 0 ? datas.map((word, index) => {
                    return(
                        <div key={index} className='search'>
                            <div className='word_search'>
                                <p>{index}.</p>  
                                <div>{word.word} </div>
                            </div>
                            <div className='word_desc'>
                                {word.numSyllables} - numSyllables
                            </div>
                        </div>   
                    )
                    })
                    : <div></div>
                }
                </>
                
            }
        </div>
    );
}

export default Tinhtulienquan;