/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSecureScoreControlProfileFromDiscriminatorValue, serializeSecureScoreControlProfile, type SecureScoreControlProfile } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
 */
export interface SecureScoreControlProfileItemRequestBuilder extends BaseRequestBuilder<SecureScoreControlProfileItemRequestBuilder> {
    /**
     * Delete navigation property secureScoreControlProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get secureScoreControlProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreControlProfile
     */
     get(requestConfiguration?: RequestConfiguration<SecureScoreControlProfileItemRequestBuilderGetQueryParameters> | undefined) : Promise<SecureScoreControlProfile | undefined>;
    /**
     * Update an editable secureScoreControlProfiles property within any integrated solution to change various properties, such as assignedTo or tenantNote.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreControlProfile
     * @see {@link https://learn.microsoft.com/graph/api/securescorecontrolprofiles-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: SecureScoreControlProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SecureScoreControlProfile | undefined>;
    /**
     * Delete navigation property secureScoreControlProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get secureScoreControlProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SecureScoreControlProfileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update an editable secureScoreControlProfiles property within any integrated solution to change various properties, such as assignedTo or tenantNote.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SecureScoreControlProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get secureScoreControlProfiles from security
 */
export interface SecureScoreControlProfileItemRequestBuilderGetQueryParameters {
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
const SecureScoreControlProfileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SecureScoreControlProfileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createSecureScoreControlProfileFromDiscriminatorValue,
        queryParametersMapper: SecureScoreControlProfileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSecureScoreControlProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSecureScoreControlProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SecureScoreControlProfileItemRequestBuilderUriTemplate = "{+baseurl}/security/secureScoreControlProfiles/{secureScoreControlProfile%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */