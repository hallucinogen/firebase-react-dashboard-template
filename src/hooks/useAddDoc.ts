import {
  addDoc,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';
import { useCallback, useState } from 'react';

export const useAddDoc = (collection: CollectionReference) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const add = useCallback(
    async (
      formData: any,
      onSuccess: (data: DocumentReference) => void,
      onError: (error: Error) => void,
    ) => {
      setLoading(true);

      try {
        const response = await addDoc(collection, formData);
        setLoading(false);
        setError(false);

        onSuccess(response);
      } catch (e) {
        setLoading(false);
        setError(true);

        onError(e as Error);
      }
    },
    [collection],
  );

  return { add, error, loading };
};
