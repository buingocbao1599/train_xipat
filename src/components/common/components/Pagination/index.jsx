import { Pagination, Stack } from '@shopify/polaris';
import React, { useState } from 'react';
// import ButtonDropdown from '../ButtonDropdown';
export default function PaginationComponent(props) {
    const [popoverActive, setPopoverActive] = useState(false);
    const [items, setItems] = useState([
        {
            active: true,
            content: 5,
            onAction: () => handleChangeLimit(5)
        },
        {
            active: false,
            content: 10,
            onAction: () => handleChangeLimit(10)
        },
        {
            active: false,
            content: 15,
            onAction: () => handleChangeLimit(15)
        },
    ]);

    const handleChangeLimit = (value) => {
        let list = items;
        list.forEach((item) => {
            if (item.content === value) item.active = true;
            else item.active = false;
        })
        setItems([...list]);
        setPopoverActive(false);
        props.handlePaginationChange(value, 'limit');
    }

    return (
        <div>
            {props.isShow && (
                <div className={`d-flex justify-content-${props.position}`} style={{ margin: props.mg, padding: props.pd }}>
                    <Stack spacing='tight'>
                        {/* <ButtonDropdown popoverActive={popoverActive} setPopoverActive={setPopoverActive} btnTitle={props.pagination.limit} items={items} /> */}
                        <Pagination
                            // label={props.pagination.page + "/" + props.pagination.total}
                            hasPrevious={props.pagination.page !== 1}
                            onPrevious={() => {
                                props.handlePaginationChange(props.pagination.page - 1, 'page');
                            }}
                            hasNext={props.pagination.page < props.pagination.total}
                            onNext={() => {
                                props.handlePaginationChange(props.pagination.page + 1, 'page');
                            }}
                        />
                    </Stack>
                </div>
            )}
        </div>
    );
}

PaginationComponent.defaultProps = {
    position: 'end',
    isShow: true,
    mg: 0,
    pd: 0,
    btnTitle: '',

}
