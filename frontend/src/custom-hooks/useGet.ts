import { useCallback, useEffect, useState } from 'react';

export const useGet = <T>(fetch: () => Promise<T>, manualTrigger: boolean = false, dependencies: any[] = []) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [trigger, setTrigger] = useState(false);

    const effectDependencies = dependencies.length ? [...dependencies] : [];

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetch();

            setData(data);
        } catch (error) {
            setError(error as Error);
        }
    }, effectDependencies);

    const refetchData = () => {
        setTrigger(prevTrigger => !prevTrigger);
    };

    useEffect(() => {
        if (manualTrigger) return;
        fetchData().finally(() => setLoading(false));
    }, [fetchData, manualTrigger, trigger]);

    return { data, error, loading, refetchData };
};
