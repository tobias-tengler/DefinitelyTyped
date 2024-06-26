import {
    DisposeFn,
    GraphQLTaggedNode,
    IEnvironment,
    OperationType,
    PreloadableConcreteRequest,
    VariablesOf,
} from "relay-runtime";
import { LoadQueryOptions, PreloadedQuery } from "./EntryPointTypes";

export type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: VariablesOf<TQuery>, options?: UseQueryLoaderLoadQueryOptions) => void,
    DisposeFn,
];

export type UseQueryLoaderLoadQueryOptions =
    & LoadQueryOptions
    & Readonly<{
        __environment?: IEnvironment | null | undefined;
    }>;

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
    initialQueryReference?: PreloadedQuery<TQuery> | null,
): useQueryLoaderHookType<TQuery>;
