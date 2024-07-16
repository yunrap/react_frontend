import { InboxProps } from "./TableDataType";
import { headersType } from "./TableType";

type headersProps = {
  headers: headersType[];
  items?: InboxProps[];
};

const DataTable = ({ headers, items }: headersProps) => {
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
            <tr key={index}>
              {/* headerKey를 순회하면서 key를 가져옴 */}
              {headerKey.map((key) => (
                <td key={key + index}>{item[key]}</td>
              ))}
            </tr>
          ))
        ) : (
          <>null</>
        )}
      </tbody>
    </table>
  );
};
export default DataTable;
