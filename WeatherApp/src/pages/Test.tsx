import {DataItem} from "../components/Table";
import SortableTable from "../components/SortableTable";


function TablePage(){
    const data: DataItem[] = [
        // Exempel data
        // {name: 'Orange', color: 'bg-orange-500', score: 5},
        // {name: 'Apple', color: 'bg-red-500', score: 3},
        // {name: 'Banana', color: 'bg-yellow-500', score: 1},
        // {name: 'Lime', color: 'bg-green-500', score: 4},

        {name: 'Carrot', weight: 4, cost: 5},
        {name: 'Tomato', weight: 10, cost: 3},
        {name: 'Onion', weight: 13, cost: 1},
    ]

    const config = [
        // Exempel data
        // {label: 'Fruit', render: (fruit: DataItem) => <>{fruit.name}</>},
        // {label: 'Color', render: (fruit: DataItem) => <div className={`p-3 m-2 rounded ${fruit.color}`}></div>},
        // {label: 'Score', render: (fruit: DataItem) => <>{fruit.score}</>, header: () => <th className="bg-red-500">Score</th>},

        {
            label: 'Name', 
            render: (vegetable: DataItem) => <>{vegetable.name}</>,
            sortValue: (vegetable: DataItem) => vegetable.name
        },
        {
            label: 'Weight', 
            render: (vegetable: DataItem) => <>{vegetable.weight}</>
        },
        {
            label: 'Cost', 
            render: (vegetable: DataItem) => <>{vegetable.cost}</>,
            sortValue: (vegetable: DataItem) => vegetable.cost
        },
      ]
    
      const getKey = (item: DataItem) => item.name || '';

    //   <Table data={data} config={config} getKey={getKey}></Table>

    return(
        <div>
            <SortableTable data={data} config={config} getKey={getKey}></SortableTable>
        </div>
    )
}


export default TablePage