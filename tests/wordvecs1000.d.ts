declare module '*/wordvecs1000.json' {
    interface VectorDatum {
        id: string;
        vector: number[];
    }

    const data: VectorDatum[];
    export default data;
}
