import React, { useState, useEffect } from 'react';
import "../css/Result.css";

function Cungvan(props) {
    const input = props.search ?  props.search : "";
    const data =  props.data ? props.data : [];
    const [datas, setDatas] = useState([]);
    
    useEffect(() =>  {
        const a = input;
        if(a !== ""){
            const callApiCungvan = async () => {
                const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${input}`);
                const result = await response.json();
                setDatas(result);
                console.log("result call api cung van: ", result);
                return result;
            }

            callApiCungvan();
            
            
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

export default Cungvan;