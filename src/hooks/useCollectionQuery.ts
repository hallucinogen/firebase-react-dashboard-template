import {
  CollectionReference,
  DocumentData,
  Query,
  QuerySnapshot,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const cache: { [key: string]: QuerySnapshot<DocumentData> } = {};

export const useCollectionQuery: (
  collection: CollectionReference | Query<DocumentData>,
) => { data: QuerySnapshot | null; error: boolean; loading: boolean } = (
  collection,
) => {
  // TODO: this is wrong. Need a way to seralize this query
  const key = 'all-campaign';

  const [data, setData] = useState<QuerySnapshot<DocumentData> | null>(
    cache[key] || null,
  );

  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection,
      (snapshot) => {
        setData(snapshot);
        setLoading(false);
        setError(false);
        cache[key] = snapshot;
      },
      (err) => {
        console.log(err);
        setData(null);
        setLoading(false);
        setError(true);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [key]);

  return {
    data,
    error,
    loading,
  };
};
