/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAdminConsentRequestPolicyFromDiscriminatorValue, serializeAdminConsentRequestPolicy, type AdminConsentRequestPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the adminConsentRequestPolicy property of the microsoft.graph.policyRoot entity.
 */
export interface AdminConsentRequestPolicyRequestBuilder extends BaseRequestBuilder<AdminConsentRequestPolicyRequestBuilder> {
    /**
     * Delete navigation property adminConsentRequestPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an adminConsentRequestPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdminConsentRequestPolicy
     * @see {@link https://learn.microsoft.com/graph/api/adminconsentrequestpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AdminConsentRequestPolicyRequestBuilderGetQueryParameters> | undefined) : Promise<AdminConsentRequestPolicy | undefined>;
    /**
     * Update the properties of an adminConsentRequestPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdminConsentRequestPolicy
     * @see {@link https://learn.microsoft.com/graph/api/adminconsentrequestpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AdminConsentRequestPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AdminConsentRequestPolicy | undefined>;
    /**
     * Delete navigation property adminConsentRequestPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an adminConsentRequestPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdminConsentRequestPolicyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an adminConsentRequestPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AdminConsentRequestPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an adminConsentRequestPolicy object.
 */
export interface AdminConsentRequestPolicyRequestBuilderGetQueryParameters {
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
const AdminConsentRequestPolicyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdminConsentRequestPolicyRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAdminConsentRequestPolicyFromDiscriminatorValue,
        queryParametersMapper: AdminConsentRequestPolicyRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAdminConsentRequestPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdminConsentRequestPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AdminConsentRequestPolicyRequestBuilderUriTemplate = "{+baseurl}/policies/adminConsentRequestPolicy{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */