/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDataCollectionInfoFromDiscriminatorValue, serializeDataCollectionInfo, type DataCollectionInfo } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dataCollectionInfo property of the microsoft.graph.authorizationSystem entity.
 */
export interface DataCollectionInfoRequestBuilder extends BaseRequestBuilder<DataCollectionInfoRequestBuilder> {
    /**
     * Delete navigation property dataCollectionInfo for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Defines how and whether Permissions Management collects data from the onboarded authorization system. Supports $filter (eq) as follows:  $filter=dataCollectionInfo/entitlements/permissionsModificationCapability and $filter=dataCollectionInfo/entitlements/status.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DataCollectionInfo>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DataCollectionInfoRequestBuilderGetQueryParameters> | undefined) : Promise<DataCollectionInfo | undefined>;
    /**
     * Update the navigation property dataCollectionInfo in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DataCollectionInfo>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DataCollectionInfo, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DataCollectionInfo | undefined>;
    /**
     * Delete navigation property dataCollectionInfo for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Defines how and whether Permissions Management collects data from the onboarded authorization system. Supports $filter (eq) as follows:  $filter=dataCollectionInfo/entitlements/permissionsModificationCapability and $filter=dataCollectionInfo/entitlements/status.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DataCollectionInfoRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property dataCollectionInfo in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DataCollectionInfo, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Defines how and whether Permissions Management collects data from the onboarded authorization system. Supports $filter (eq) as follows:  $filter=dataCollectionInfo/entitlements/permissionsModificationCapability and $filter=dataCollectionInfo/entitlements/status.
 */
export interface DataCollectionInfoRequestBuilderGetQueryParameters {
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
export const DataCollectionInfoRequestBuilderUriTemplate = "{+baseurl}/external/authorizationSystems/{authorizationSystem%2Did}/dataCollectionInfo{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DataCollectionInfoRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DataCollectionInfoRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DataCollectionInfoRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DataCollectionInfoRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDataCollectionInfoFromDiscriminatorValue,
        queryParametersMapper: DataCollectionInfoRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DataCollectionInfoRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDataCollectionInfoFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDataCollectionInfo,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
