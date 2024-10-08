/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudPcOnPremisesConnectionFromDiscriminatorValue, serializeCloudPcOnPremisesConnection, type CloudPcOnPremisesConnection } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { RunHealthChecksRequestBuilderRequestsMetadata, type RunHealthChecksRequestBuilder } from './runHealthChecks/index.js';
// @ts-ignore
import { type UpdateAdDomainPasswordRequestBuilder, UpdateAdDomainPasswordRequestBuilderRequestsMetadata } from './updateAdDomainPassword/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onPremisesConnections property of the microsoft.graph.virtualEndpoint entity.
 */
export interface CloudPcOnPremisesConnectionItemRequestBuilder extends BaseRequestBuilder<CloudPcOnPremisesConnectionItemRequestBuilder> {
    /**
     * Provides operations to call the runHealthChecks method.
     */
    get runHealthChecks(): RunHealthChecksRequestBuilder;
    /**
     * Provides operations to call the updateAdDomainPassword method.
     */
    get updateAdDomainPassword(): UpdateAdDomainPasswordRequestBuilder;
    /**
     * Delete a specific cloudPcOnPremisesConnection object. When you delete an Azure network connection, permissions to the service are removed from the specified Azure resources. You can't delete an Azure network connection when it's in use, as indicated by the inUse property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpconpremisesconnection-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of the cloudPcOnPremisesConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcOnPremisesConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpconpremisesconnection-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CloudPcOnPremisesConnectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcOnPremisesConnection | undefined>;
    /**
     * Update the properties of a cloudPcOnPremisesConnection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcOnPremisesConnection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpconpremisesconnection-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: CloudPcOnPremisesConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcOnPremisesConnection | undefined>;
    /**
     * Delete a specific cloudPcOnPremisesConnection object. When you delete an Azure network connection, permissions to the service are removed from the specified Azure resources. You can't delete an Azure network connection when it's in use, as indicated by the inUse property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of the cloudPcOnPremisesConnection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CloudPcOnPremisesConnectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a cloudPcOnPremisesConnection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CloudPcOnPremisesConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of the cloudPcOnPremisesConnection object.
 */
export interface CloudPcOnPremisesConnectionItemRequestBuilderGetQueryParameters {
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
export const CloudPcOnPremisesConnectionItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CloudPcOnPremisesConnectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CloudPcOnPremisesConnectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CloudPcOnPremisesConnectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    runHealthChecks: {
        requestsMetadata: RunHealthChecksRequestBuilderRequestsMetadata,
    },
    updateAdDomainPassword: {
        requestsMetadata: UpdateAdDomainPasswordRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CloudPcOnPremisesConnectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CloudPcOnPremisesConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CloudPcOnPremisesConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcOnPremisesConnectionFromDiscriminatorValue,
        queryParametersMapper: CloudPcOnPremisesConnectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CloudPcOnPremisesConnectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcOnPremisesConnectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcOnPremisesConnection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
