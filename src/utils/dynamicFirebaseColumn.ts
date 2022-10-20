import { DocumentData, QuerySnapshot } from 'firebase/firestore';

/*
 * Helper function to parse Firebase response to Ant Design compatible
 * <Table> `dataSource` and `columns`
 * If you need custom columns order or filter, you will want to build your own parser
 */
export const dynamicFirebaseColumn = (
  data: QuerySnapshot<DocumentData> | null,
) => {
  if (data == null) {
    return {
      columns: [],
      dataSource: [],
    };
  }

  const dataSource = data.docs.map((doc, index) => ({
    key: index,
    ...doc.data(),
  }));

  const map: Record<string, string> = data.docs.reduce(
    (acc: Record<string, string>, doc) => {
      const data = doc.data();
      for (const key in data) {
        acc[key] = key
          .split(' ')
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(' ');
      }

      return acc;
    },
    {},
  );

  // Sort the column so it's predictive
  const columns = Object.keys(map)
    .map((key) => ({
      dataIndex: key,
      key,
      title: map[key],
    }))
    .sort((a, b) => a.dataIndex.localeCompare(b.dataIndex));

  return { columns, dataSource };
};
