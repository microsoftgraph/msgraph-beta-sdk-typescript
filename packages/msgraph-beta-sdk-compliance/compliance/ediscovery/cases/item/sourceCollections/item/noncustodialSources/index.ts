/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createNoncustodialDataSourceCollectionResponseFromDiscriminatorValue, type NoncustodialDataSourceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/ediscovery/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { NoncustodialDataSourceItemRequestBuilderRequestsMetadata, NoncustodialDataSourceItemRequestBuilderUriTemplate, type NoncustodialDataSourceItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialSources property of the microsoft.graph.ediscovery.sourceCollection entity.
 */
export interface NoncustodialSourcesRequestBuilder extends BaseRequestBuilder<NoncustodialSourcesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @param noncustodialDataSourceId The unique identifier of noncustodialDataSource
     * @returns a NoncustodialDataSourceItemRequestBuilder
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     byNoncustodialDataSourceId(noncustodialDataSourceId: string) : NoncustodialDataSourceItemRequestBuilder;
    /**
     * Get a list of noncustodialDataSource associated with a sourceCollection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NoncustodialDataSourceCollectionResponse
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     * @see {@link https://learn.microsoft.com/graph/api/ediscovery-sourcecollection-list-noncustodialsources?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<NoncustodialSourcesRequestBuilderGetQueryParameters> | undefined) : Promise<NoncustodialDataSourceCollectionResponse | undefined>;
    /**
     * Get a list of noncustodialDataSource associated with a sourceCollection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<NoncustodialSourcesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of noncustodialDataSource associated with a sourceCollection.
 */
export interface NoncustodialSourcesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const NoncustodialSourcesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const NoncustodialSourcesRequestBuilderNavigationMetadata: Record<Exclude<keyof NoncustodialSourcesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byNoncustodialDataSourceId: {
        uriTemplate: NoncustodialDataSourceItemRequestBuilderUriTemplate,
        requestsMetadata: NoncustodialDataSourceItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["noncustodialDataSource%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const NoncustodialSourcesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createNoncustodialDataSourceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: NoncustodialSourcesRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const NoncustodialSourcesRequestBuilderUriTemplate = "{+baseurl}/compliance/ediscovery/cases/{case%2Did}/sourceCollections/{sourceCollection%2Did}/noncustodialSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */