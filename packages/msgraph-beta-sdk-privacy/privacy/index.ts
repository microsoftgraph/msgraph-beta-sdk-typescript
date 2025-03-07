/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPrivacyFromDiscriminatorValue, serializePrivacy, type Privacy } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { SubjectRightsRequestsRequestBuilderNavigationMetadata, SubjectRightsRequestsRequestBuilderRequestsMetadata, type SubjectRightsRequestsRequestBuilder } from './subjectRightsRequests/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the privacy singleton.
 */
export interface PrivacyRequestBuilder extends BaseRequestBuilder<PrivacyRequestBuilder> {
    /**
     * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
     */
    get subjectRightsRequests(): SubjectRightsRequestsRequestBuilder;
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Privacy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PrivacyRequestBuilderGetQueryParameters> | undefined) : Promise<Privacy | undefined>;
    /**
     * Update privacy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Privacy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Privacy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Privacy | undefined>;
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PrivacyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update privacy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Privacy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get privacy
 */
export interface PrivacyRequestBuilderGetQueryParameters {
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
export const PrivacyRequestBuilderUriTemplate = "{+baseurl}/privacy{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PrivacyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivacyRequestBuilderNavigationMetadata: Record<Exclude<keyof PrivacyRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    subjectRightsRequests: {
        requestsMetadata: SubjectRightsRequestsRequestBuilderRequestsMetadata,
        navigationMetadata: SubjectRightsRequestsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PrivacyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PrivacyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrivacyFromDiscriminatorValue,
        queryParametersMapper: PrivacyRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PrivacyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrivacyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrivacy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
