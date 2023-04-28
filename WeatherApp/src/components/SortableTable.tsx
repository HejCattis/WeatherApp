import { useState } from "react";
import Table from "./Table"
import { TableProps } from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";


function SortableTable(props : TableProps) {
    const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
    const [sortBy, setSortBy] = useState<null | string>(null)
    const { config, data } = props;

    const handleClick = (label: string) => {
        if (sortBy && label !== sortBy){
            setSortBy('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc'){
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc'){
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue){
            return column
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>)
        }
    })

    let sortedData = data;
    if (sortOrder && sortBy) {

        const { sortValue } : any = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    return (

        <Table {...props} data={sortedData} config={updatedConfig}></Table>
    )
}

function getIcons(label: string, sortBy: string | null, sortOrder: string | null ) {
    if (label !== sortBy){
        return (
            <div>
                <GoArrowSmallUp></GoArrowSmallUp>
                <GoArrowSmallDown></GoArrowSmallDown>
            </div>
        )
    }
    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp></GoArrowSmallUp>
                <GoArrowSmallDown></GoArrowSmallDown>
            </div>
        )
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallUp></GoArrowSmallUp>
            </div>
        )
    } else if (sortOrder === 'desc'){
        return (
            <div>
                <GoArrowSmallDown></GoArrowSmallDown>
            </div>
        )
    }
}
export default SortableTable