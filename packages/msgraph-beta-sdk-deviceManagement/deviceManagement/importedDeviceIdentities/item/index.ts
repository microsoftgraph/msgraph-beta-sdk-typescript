/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createImportedDeviceIdentityFromDiscriminatorValue, serializeImportedDeviceIdentity, type ImportedDeviceIdentity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the importedDeviceIdentities property of the microsoft.graph.deviceManagement entity.
 */
export interface ImportedDeviceIdentityItemRequestBuilder extends BaseRequestBuilder<ImportedDeviceIdentityItemRequestBuilder> {
    /**
     * Delete navigation property importedDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The imported device identities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImportedDeviceIdentity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ImportedDeviceIdentityItemRequestBuilderGetQueryParameters> | undefined) : Promise<ImportedDeviceIdentity | undefined>;
    /**
     * Update the navigation property importedDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImportedDeviceIdentity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ImportedDeviceIdentity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImportedDeviceIdentity | undefined>;
    /**
     * Delete navigation property importedDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The imported device identities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ImportedDeviceIdentityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property importedDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ImportedDeviceIdentity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The imported device identities.
 */
export interface ImportedDeviceIdentityItemRequestBuilderGetQueryParameters {
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
export const ImportedDeviceIdentityItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ImportedDeviceIdentityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ImportedDeviceIdentityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ImportedDeviceIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ImportedDeviceIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImportedDeviceIdentityFromDiscriminatorValue,
        queryParametersMapper: ImportedDeviceIdentityItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ImportedDeviceIdentityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImportedDeviceIdentityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImportedDeviceIdentity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
