/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createEdiscoveryHoldPolicyFromDiscriminatorValue, serializeEdiscoveryHoldPolicy, type EdiscoveryHoldPolicy } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { SiteSourcesRequestBuilderNavigationMetadata, SiteSourcesRequestBuilderRequestsMetadata, type SiteSourcesRequestBuilder } from './siteSources/index.js';
// @ts-ignore
import { type UserSourcesRequestBuilder, UserSourcesRequestBuilderNavigationMetadata, UserSourcesRequestBuilderRequestsMetadata } from './userSources/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the legalHolds property of the microsoft.graph.security.ediscoveryCase entity.
 */
export interface EdiscoveryHoldPolicyItemRequestBuilder extends BaseRequestBuilder<EdiscoveryHoldPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryHoldPolicy entity.
     */
    get siteSources(): SiteSourcesRequestBuilder;
    /**
     * Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryHoldPolicy entity.
     */
    get userSources(): UserSourcesRequestBuilder;
    /**
     * Delete navigation property legalHolds for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Returns a list of case eDiscoveryHoldPolicy objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoveryHoldPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<EdiscoveryHoldPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoveryHoldPolicy | undefined>;
    /**
     * Update the navigation property legalHolds in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoveryHoldPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: EdiscoveryHoldPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EdiscoveryHoldPolicy | undefined>;
    /**
     * Delete navigation property legalHolds for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Returns a list of case eDiscoveryHoldPolicy objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdiscoveryHoldPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property legalHolds in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EdiscoveryHoldPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Returns a list of case eDiscoveryHoldPolicy objects for this case.
 */
export interface EdiscoveryHoldPolicyItemRequestBuilderGetQueryParameters {
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
export const EdiscoveryHoldPolicyItemRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/legalHolds/{ediscoveryHoldPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EdiscoveryHoldPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EdiscoveryHoldPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof EdiscoveryHoldPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    siteSources: {
        requestsMetadata: SiteSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: SiteSourcesRequestBuilderNavigationMetadata,
    },
    userSources: {
        requestsMetadata: UserSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: UserSourcesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdiscoveryHoldPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EdiscoveryHoldPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EdiscoveryHoldPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoveryHoldPolicyFromDiscriminatorValue,
        queryParametersMapper: EdiscoveryHoldPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EdiscoveryHoldPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoveryHoldPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdiscoveryHoldPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
