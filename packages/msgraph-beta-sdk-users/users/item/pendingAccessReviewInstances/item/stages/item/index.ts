/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessReviewStageFromDiscriminatorValue, serializeAccessReviewStage, type AccessReviewStage } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DecisionsRequestBuilderNavigationMetadata, DecisionsRequestBuilderRequestsMetadata, DecisionsRequestBuilderUriTemplate, type DecisionsRequestBuilder } from './decisions/';
import { StopRequestBuilderRequestsMetadata, StopRequestBuilderUriTemplate, type StopRequestBuilder } from './stop/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the stages property of the microsoft.graph.accessReviewInstance entity.
 */
export interface AccessReviewStageItemRequestBuilder extends BaseRequestBuilder<AccessReviewStageItemRequestBuilder> {
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
     */
    get decisions(): DecisionsRequestBuilder;
    /**
     * Provides operations to call the stop method.
     */
    get stop(): StopRequestBuilder;
    /**
     * Delete navigation property stages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of an accessReviewStage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStage
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewstage-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewStageItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewStage | undefined>;
    /**
     * Update the properties of an accessReviewStage object. Only the reviewers and fallbackReviewers properties can be updated. You can only add reviewers to the fallbackReviewers property but can't remove existing fallbackReviewers. To update an accessReviewStage, its status must be NotStarted, Initializing, or InProgress.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewStage
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewstage-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AccessReviewStage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewStage | undefined>;
    /**
     * Delete navigation property stages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of an accessReviewStage object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewStageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an accessReviewStage object. Only the reviewers and fallbackReviewers properties can be updated. You can only add reviewers to the fallbackReviewers property but can't remove existing fallbackReviewers. To update an accessReviewStage, its status must be NotStarted, Initializing, or InProgress.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AccessReviewStage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an accessReviewStage object.
 */
export interface AccessReviewStageItemRequestBuilderGetQueryParameters {
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
const AccessReviewStageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewStageItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessReviewStageItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    decisions: {
        uriTemplate: DecisionsRequestBuilderUriTemplate,
        requestsMetadata: DecisionsRequestBuilderRequestsMetadata,
        navigationMetadata: DecisionsRequestBuilderNavigationMetadata,
    },
    stop: {
        uriTemplate: StopRequestBuilderUriTemplate,
        requestsMetadata: StopRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewStageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAccessReviewStageFromDiscriminatorValue,
        queryParametersMapper: AccessReviewStageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessReviewStageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewStage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessReviewStageItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/pendingAccessReviewInstances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */