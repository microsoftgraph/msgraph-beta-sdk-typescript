/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createThreatIntelligencePolicyFromDiscriminatorValue, serializeThreatIntelligencePolicy, type ThreatIntelligencePolicy } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { PolicyRulesRequestBuilderNavigationMetadata, PolicyRulesRequestBuilderRequestsMetadata, type PolicyRulesRequestBuilder } from './policyRules/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threatIntelligencePolicies property of the microsoft.graph.networkaccess.networkAccessRoot entity.
 */
export interface ThreatIntelligencePolicyItemRequestBuilder extends BaseRequestBuilder<ThreatIntelligencePolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the policyRules property of the microsoft.graph.networkaccess.policy entity.
     */
    get policyRules(): PolicyRulesRequestBuilder;
    /**
     * Delete a threatIntelligencePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-networkaccessroot-delete-threatintelligencepolicies?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a threatIntelligencePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ThreatIntelligencePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-threatintelligencepolicy-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ThreatIntelligencePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<ThreatIntelligencePolicy | undefined>;
    /**
     * Update the properties of a threatIntelligencePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ThreatIntelligencePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-threatintelligencepolicy-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: ThreatIntelligencePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ThreatIntelligencePolicy | undefined>;
    /**
     * Delete a threatIntelligencePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a threatIntelligencePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ThreatIntelligencePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a threatIntelligencePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ThreatIntelligencePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a threatIntelligencePolicy object.
 */
export interface ThreatIntelligencePolicyItemRequestBuilderGetQueryParameters {
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
export const ThreatIntelligencePolicyItemRequestBuilderUriTemplate = "{+baseurl}/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ThreatIntelligencePolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ThreatIntelligencePolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ThreatIntelligencePolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    policyRules: {
        requestsMetadata: PolicyRulesRequestBuilderRequestsMetadata,
        navigationMetadata: PolicyRulesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ThreatIntelligencePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ThreatIntelligencePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ThreatIntelligencePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createThreatIntelligencePolicyFromDiscriminatorValue,
        queryParametersMapper: ThreatIntelligencePolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ThreatIntelligencePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createThreatIntelligencePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeThreatIntelligencePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
