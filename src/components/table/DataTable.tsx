import { InboxProps } from "../../types/TableDataType";
import { headersType } from "../../types/TableType";

type headersProps = {
  headers: headersType[];
  items?: InboxProps[];
  handleDetail?: (id: string) => void;
};

const DataTable = ({ headers, items, handleDetail }: headersProps) => {
  if (!headers || !headers.length) {
    throw new Error("<DataTable /> headers is required.");
  }
  const headerKey = headers.map((header) => header.value);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header: headersType) => (
            <th key={header.text}>
              {header.text} {/* 컬럼명 바인딩 */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items !== undefined ? (
          items.map((item, index) => (
            <tr
              key={index + "ddd"}
              onClick={() => {
                if (handleDetail) handleDetail(item.documentNumber);
              }}
            >
              {/* headerKey를 순회하면서 key를 가져옴 */}
              {headerKey.map((key) => (
                <td key={key + index}>{item[key]}</td>
              ))}
            </tr>
          ))
        ) : (
          <>
            <tr>{"데이터가없습니다."}</tr>
          </>
        )}
      </tbody>
    </table>
  );
};
export default DataTable;
