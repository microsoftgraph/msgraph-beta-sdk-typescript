/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVppTokenFromDiscriminatorValue, serializeVppToken, type VppToken } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { RevokeLicensesRequestBuilderRequestsMetadata, RevokeLicensesRequestBuilderUriTemplate, type RevokeLicensesRequestBuilder } from './revokeLicenses/';
import { SyncLicensesRequestBuilderRequestsMetadata, SyncLicensesRequestBuilderUriTemplate, type SyncLicensesRequestBuilder } from './syncLicenses/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
 */
export interface VppTokenItemRequestBuilder extends BaseRequestBuilder<VppTokenItemRequestBuilder> {
    /**
     * Provides operations to call the revokeLicenses method.
     */
    get revokeLicenses(): RevokeLicensesRequestBuilder;
    /**
     * Provides operations to call the syncLicenses method.
     */
    get syncLicenses(): SyncLicensesRequestBuilder;
    /**
     * Delete navigation property vppTokens for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * List of Vpp tokens for this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     */
     get(requestConfiguration?: RequestConfiguration<VppTokenItemRequestBuilderGetQueryParameters> | undefined) : Promise<VppToken | undefined>;
    /**
     * Update the navigation property vppTokens in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     */
     patch(body: VppToken, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VppToken | undefined>;
    /**
     * Delete navigation property vppTokens for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * List of Vpp tokens for this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VppTokenItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property vppTokens in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: VppToken, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of Vpp tokens for this organization.
 */
export interface VppTokenItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VppTokenItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VppTokenItemRequestBuilderNavigationMetadata: Record<Exclude<keyof VppTokenItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    revokeLicenses: {
        uriTemplate: RevokeLicensesRequestBuilderUriTemplate,
        requestsMetadata: RevokeLicensesRequestBuilderRequestsMetadata,
    },
    syncLicenses: {
        uriTemplate: SyncLicensesRequestBuilderUriTemplate,
        requestsMetadata: SyncLicensesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VppTokenItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVppTokenFromDiscriminatorValue,
        queryParametersMapper: VppTokenItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVppTokenFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVppToken,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const VppTokenItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/vppTokens/{vppToken%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */