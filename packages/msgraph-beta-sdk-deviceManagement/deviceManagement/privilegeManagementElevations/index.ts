/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrivilegeManagementElevationCollectionResponseFromDiscriminatorValue, createPrivilegeManagementElevationFromDiscriminatorValue, serializePrivilegeManagementElevation, type PrivilegeManagementElevation, type PrivilegeManagementElevationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { PrivilegeManagementElevationItemRequestBuilderRequestsMetadata, PrivilegeManagementElevationItemRequestBuilderUriTemplate, type PrivilegeManagementElevationItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the privilegeManagementElevations property of the microsoft.graph.deviceManagement entity.
 */
export interface PrivilegeManagementElevationsRequestBuilder extends BaseRequestBuilder<PrivilegeManagementElevationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the privilegeManagementElevations property of the microsoft.graph.deviceManagement entity.
     * @param privilegeManagementElevationId The unique identifier of privilegeManagementElevation
     * @returns a PrivilegeManagementElevationItemRequestBuilder
     */
     byPrivilegeManagementElevationId(privilegeManagementElevationId: string) : PrivilegeManagementElevationItemRequestBuilder;
    /**
     * The endpoint privilege management elevation event entity contains elevation details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegeManagementElevationCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<PrivilegeManagementElevationsRequestBuilderGetQueryParameters> | undefined) : Promise<PrivilegeManagementElevationCollectionResponse | undefined>;
    /**
     * Create new navigation property to privilegeManagementElevations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegeManagementElevation
     */
     post(body: PrivilegeManagementElevation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrivilegeManagementElevation | undefined>;
    /**
     * The endpoint privilege management elevation event entity contains elevation details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PrivilegeManagementElevationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to privilegeManagementElevations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PrivilegeManagementElevation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The endpoint privilege management elevation event entity contains elevation details.
 */
export interface PrivilegeManagementElevationsRequestBuilderGetQueryParameters {
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
const PrivilegeManagementElevationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PrivilegeManagementElevationsRequestBuilderNavigationMetadata: Record<Exclude<keyof PrivilegeManagementElevationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPrivilegeManagementElevationId: {
        uriTemplate: PrivilegeManagementElevationItemRequestBuilderUriTemplate,
        requestsMetadata: PrivilegeManagementElevationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["privilegeManagementElevation%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PrivilegeManagementElevationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegeManagementElevationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PrivilegeManagementElevationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegeManagementElevationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrivilegeManagementElevation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegeManagementElevationsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/privilegeManagementElevations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */