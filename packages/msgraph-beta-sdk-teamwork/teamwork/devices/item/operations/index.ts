/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamworkDeviceOperationCollectionResponseFromDiscriminatorValue, createTeamworkDeviceOperationFromDiscriminatorValue, serializeTeamworkDeviceOperation, type TeamworkDeviceOperation, type TeamworkDeviceOperationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TeamworkDeviceOperationItemRequestBuilderRequestsMetadata, type TeamworkDeviceOperationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.teamworkDevice entity.
 */
export interface OperationsRequestBuilder extends BaseRequestBuilder<OperationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.teamworkDevice entity.
     * @param teamworkDeviceOperationId The unique identifier of teamworkDeviceOperation
     * @returns {TeamworkDeviceOperationItemRequestBuilder}
     */
     byTeamworkDeviceOperationId(teamworkDeviceOperationId: string) : TeamworkDeviceOperationItemRequestBuilder;
    /**
     * Get a list of the operations that are running on a Microsoft Teams-enabled device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDeviceOperationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamworkdeviceoperation-list?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : Promise<TeamworkDeviceOperationCollectionResponse | undefined>;
    /**
     * Create new navigation property to operations for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDeviceOperation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TeamworkDeviceOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamworkDeviceOperation | undefined>;
    /**
     * Get a list of the operations that are running on a Microsoft Teams-enabled device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to operations for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TeamworkDeviceOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the operations that are running on a Microsoft Teams-enabled device.
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
 * Uri template for the request builder.
 */
export const OperationsRequestBuilderUriTemplate = "{+baseurl}/teamwork/devices/{teamworkDevice%2Did}/operations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
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
    byTeamworkDeviceOperationId: {
        requestsMetadata: TeamworkDeviceOperationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["teamworkDeviceOperation%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OperationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceOperationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OperationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamworkDeviceOperation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
