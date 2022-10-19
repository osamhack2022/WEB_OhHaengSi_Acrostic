export interface ITableProps<T> {
  headers: string[];
  itemMapper: (item: T) => (string | number)[];
  items: T[];
}

export default function Table<T>({
  headers,
  itemMapper,
  items,
}: ITableProps<T>) {
  return (
    <table
      className="table table-bordered"
      id="dataTable"
      width="100%"
      cellSpacing={0}
    >
      <thead>
        <tr>
          {headers.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const columns = itemMapper(item);
          return (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{column}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
