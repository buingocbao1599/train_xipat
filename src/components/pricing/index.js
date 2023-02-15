import React, { useCallback, useState, memo, useRef} from 'react'


function Index() {
    const [tab, setTab] = useState(1);

    const show  = useRef(1);

    const handleChangeTab = useCallback((x) => {
        if(x == 1){
            setTab(1)
        } else {
            setTab(2)
        }
    }, [])

    const Tab1 = () => {
        return (
            <>
                Nội dung tab1
            </>
        )
    }

    const Tab2 = () => {
        return (
            <>
               Nội dung tab2
            </>
        )
    }

    return (
        <>
            <button onClick={() => handleChangeTab(1)}>Tab1</button>
            <button onClick={() => handleChangeTab(2)}>Tab2</button>
            <div>
                {
                    tab === 1
                        ? <Tab1 />
                        : <Tab2 />
                }
            </div>
        </>
    )
}

export default memo(Index);
