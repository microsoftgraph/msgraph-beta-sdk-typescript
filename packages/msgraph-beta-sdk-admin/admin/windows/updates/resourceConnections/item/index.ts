/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createResourceConnectionFromDiscriminatorValue, serializeResourceConnection, type ResourceConnection } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceConnections property of the microsoft.graph.adminWindowsUpdates entity.
 */
export interface ResourceConnectionItemRequestBuilder extends BaseRequestBuilder<ResourceConnectionItemRequestBuilder> {
    /**
     * Delete an operationalInsightsConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/windowsupdates-operationalinsightsconnection-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an operationalInsightsConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ResourceConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/windowsupdates-operationalinsightsconnection-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ResourceConnectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<ResourceConnection | undefined>;
    /**
     * Update the navigation property resourceConnections in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ResourceConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ResourceConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ResourceConnection | undefined>;
    /**
     * Delete an operationalInsightsConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an operationalInsightsConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ResourceConnectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property resourceConnections in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ResourceConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an operationalInsightsConnection object.
 */
export interface ResourceConnectionItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const ResourceConnectionItemRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/resourceConnections/{resourceConnection%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ResourceConnectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ResourceConnectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ResourceConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ResourceConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createResourceConnectionFromDiscriminatorValue,
        queryParametersMapper: ResourceConnectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ResourceConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createResourceConnectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeResourceConnection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
