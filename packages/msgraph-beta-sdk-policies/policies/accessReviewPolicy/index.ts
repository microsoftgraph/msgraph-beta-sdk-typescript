/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessReviewPolicyFromDiscriminatorValue, serializeAccessReviewPolicy, type AccessReviewPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessReviewPolicy property of the microsoft.graph.policyRoot entity.
 */
export interface AccessReviewPolicyRequestBuilder extends BaseRequestBuilder<AccessReviewPolicyRequestBuilder> {
    /**
     * Delete navigation property accessReviewPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an accessReviewPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewPolicy
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewPolicyRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewPolicy | undefined>;
    /**
     * Update the properties of an accessReviewPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewPolicy
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AccessReviewPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewPolicy | undefined>;
    /**
     * Delete navigation property accessReviewPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an accessReviewPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewPolicyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an accessReviewPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AccessReviewPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an accessReviewPolicy object.
 */
export interface AccessReviewPolicyRequestBuilderGetQueryParameters {
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
const AccessReviewPolicyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewPolicyRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAccessReviewPolicyFromDiscriminatorValue,
        queryParametersMapper: AccessReviewPolicyRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessReviewPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessReviewPolicyRequestBuilderUriTemplate = "{+baseurl}/policies/accessReviewPolicy{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */