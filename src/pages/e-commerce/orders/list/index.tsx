import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../config/axiosInstance'
import { AgGridReact } from 'ag-grid-react'
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css'; // Örnek tema


function List() {
    const [orders, setorders] = useState<OrdersModel[]>([])

    useEffect(() => {
        axiosInstance.get('orders')
            .then(res => {
                console.log(res.data.length)
                setorders(res.data)
            })
    }, [])



    const [columnDefs, setcolumnDefs] = useState<any>([
        { field: 'id', filter: true },
        { field: 'customerId', filter: true },
        { field: 'employeeId' },
        { field: 'orderDate', filter: true },
        { field: 'requiredDate', filter: true },
        { field: 'shippedDate', filter: true }
    ])



    return <>
        <h1>Orders</h1>
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={orders}
                columnDefs={columnDefs}
                pagination={true}
            />

        </div>

    </>
}

export default List


interface OrdersModel {
    id: number;
    customerId: string | null;
    employeeId: number | null;
    orderDate: string | null;
    requiredDate: string | null;
    shippedDate: string | null;
}