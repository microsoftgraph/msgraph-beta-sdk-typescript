/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createCaseOperationCollectionResponseFromDiscriminatorValue, createCaseOperationFromDiscriminatorValue, serializeCaseOperation, type CaseOperation, type CaseOperationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CaseOperationItemRequestBuilderRequestsMetadata, CaseOperationItemRequestBuilderUriTemplate, type CaseOperationItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.security.ediscoveryCase entity.
 */
export interface OperationsRequestBuilder extends BaseRequestBuilder<OperationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.security.ediscoveryCase entity.
     * @param caseOperationId The unique identifier of caseOperation
     * @returns a CaseOperationItemRequestBuilder
     */
     byCaseOperationId(caseOperationId: string) : CaseOperationItemRequestBuilder;
    /**
     * Get a list of the caseOperation objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CaseOperationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-list-operations?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : Promise<CaseOperationCollectionResponse | undefined>;
    /**
     * Create new navigation property to operations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CaseOperation
     */
     post(body: CaseOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CaseOperation | undefined>;
    /**
     * Get a list of the caseOperation objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to operations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CaseOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the caseOperation objects and their properties.
 */
export interface OperationsRequestBuilderGetQueryParameters {
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
const OperationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OperationsRequestBuilderNavigationMetadata: Record<Exclude<keyof OperationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCaseOperationId: {
        uriTemplate: CaseOperationItemRequestBuilderUriTemplate,
        requestsMetadata: CaseOperationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["caseOperation%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OperationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCaseOperationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OperationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCaseOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCaseOperation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OperationsRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/operations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */