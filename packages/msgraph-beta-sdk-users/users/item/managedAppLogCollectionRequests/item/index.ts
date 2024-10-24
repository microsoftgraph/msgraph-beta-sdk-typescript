/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedAppLogCollectionRequestFromDiscriminatorValue, serializeManagedAppLogCollectionRequest, type ManagedAppLogCollectionRequest } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedAppLogCollectionRequests property of the microsoft.graph.user entity.
 */
export interface ManagedAppLogCollectionRequestItemRequestBuilder extends BaseRequestBuilder<ManagedAppLogCollectionRequestItemRequestBuilder> {
    /**
     * Delete navigation property managedAppLogCollectionRequests for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Zero or more log collection requests triggered for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedAppLogCollectionRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<ManagedAppLogCollectionRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedAppLogCollectionRequest | undefined>;
    /**
     * Update the navigation property managedAppLogCollectionRequests in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedAppLogCollectionRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     patch(body: ManagedAppLogCollectionRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedAppLogCollectionRequest | undefined>;
    /**
     * Delete navigation property managedAppLogCollectionRequests for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Zero or more log collection requests triggered for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedAppLogCollectionRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managedAppLogCollectionRequests in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPatchRequestInformation(body: ManagedAppLogCollectionRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Zero or more log collection requests triggered for the user.
 */
export interface ManagedAppLogCollectionRequestItemRequestBuilderGetQueryParameters {
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
export const ManagedAppLogCollectionRequestItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedAppLogCollectionRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedAppLogCollectionRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ManagedAppLogCollectionRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ManagedAppLogCollectionRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedAppLogCollectionRequestFromDiscriminatorValue,
        queryParametersMapper: ManagedAppLogCollectionRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ManagedAppLogCollectionRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedAppLogCollectionRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedAppLogCollectionRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
