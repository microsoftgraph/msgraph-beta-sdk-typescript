/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPermissionsRequestChangeCollectionResponseFromDiscriminatorValue, createPermissionsRequestChangeFromDiscriminatorValue, serializePermissionsRequestChange, type PermissionsRequestChange, type PermissionsRequestChangeCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { PermissionsRequestChangeItemRequestBuilderRequestsMetadata, PermissionsRequestChangeItemRequestBuilderUriTemplate, type PermissionsRequestChangeItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissionsRequestChanges property of the microsoft.graph.permissionsManagement entity.
 */
export interface PermissionsRequestChangesRequestBuilder extends BaseRequestBuilder<PermissionsRequestChangesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the permissionsRequestChanges property of the microsoft.graph.permissionsManagement entity.
     * @param permissionsRequestChangeId The unique identifier of permissionsRequestChange
     * @returns a PermissionsRequestChangeItemRequestBuilder
     */
     byPermissionsRequestChangeId(permissionsRequestChangeId: string) : PermissionsRequestChangeItemRequestBuilder;
    /**
     * List the permissionsRequestChange objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionsRequestChangeCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/permissionsmanagement-list-permissionsrequestchanges?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PermissionsRequestChangesRequestBuilderGetQueryParameters> | undefined) : Promise<PermissionsRequestChangeCollectionResponse | undefined>;
    /**
     * Create new navigation property to permissionsRequestChanges for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionsRequestChange
     */
     post(body: PermissionsRequestChange, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PermissionsRequestChange | undefined>;
    /**
     * List the permissionsRequestChange objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PermissionsRequestChangesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to permissionsRequestChanges for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PermissionsRequestChange, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List the permissionsRequestChange objects and their properties.
 */
export interface PermissionsRequestChangesRequestBuilderGetQueryParameters {
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
const PermissionsRequestChangesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PermissionsRequestChangesRequestBuilderNavigationMetadata: Record<Exclude<keyof PermissionsRequestChangesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPermissionsRequestChangeId: {
        uriTemplate: PermissionsRequestChangeItemRequestBuilderUriTemplate,
        requestsMetadata: PermissionsRequestChangeItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["permissionsRequestChange%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PermissionsRequestChangesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPermissionsRequestChangeCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PermissionsRequestChangesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPermissionsRequestChangeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePermissionsRequestChange,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PermissionsRequestChangesRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/permissionsManagement/permissionsRequestChanges{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */