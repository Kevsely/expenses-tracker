import React from 'react'
import { default as api } from "../store/apiSlice"
import { getLabels } from '../helper/helper';

export default function Labels() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    let Transactions;

    
    if(isFetching) {
        Transactions = <div>Fetching</div>
    } else if(isSuccess) {
        Transactions = getLabels(data).map((value, index) => <LabelComponent key={index} data={value}></LabelComponent>)
    } else if(isError) {
        Transactions = <div>Error</div>
    }
    
    return (
        <>
            {Transactions}
        </>
    )
}

function LabelComponent({ data }) {
    if(!data) return <></>
    return (
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h2 rounded py-3' style={{background: data.color ?? "#f9c74f"}}></div>
                <h3 className='text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}