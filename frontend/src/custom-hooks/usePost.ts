import { useState } from 'react';

export const usePost = <T, K>(api: (params: K) => Promise<T>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const postRequest = async (params: K) => {
        setLoading(true);
        setError(null);
        try {
            return await api(params);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    return {
        postRequest,
        loading,
        error
    };
};
