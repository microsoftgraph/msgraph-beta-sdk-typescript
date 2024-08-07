/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessReviewFromDiscriminatorValue, serializeAccessReview, type AccessReview } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ApplyDecisionsRequestBuilderRequestsMetadata, type ApplyDecisionsRequestBuilder } from './applyDecisions/index.js';
// @ts-ignore
import { DecisionsRequestBuilderNavigationMetadata, DecisionsRequestBuilderRequestsMetadata, type DecisionsRequestBuilder } from './decisions/index.js';
// @ts-ignore
import { MyDecisionsRequestBuilderNavigationMetadata, MyDecisionsRequestBuilderRequestsMetadata, type MyDecisionsRequestBuilder } from './myDecisions/index.js';
// @ts-ignore
import { ResetDecisionsRequestBuilderRequestsMetadata, type ResetDecisionsRequestBuilder } from './resetDecisions/index.js';
// @ts-ignore
import { ReviewersRequestBuilderNavigationMetadata, ReviewersRequestBuilderRequestsMetadata, type ReviewersRequestBuilder } from './reviewers/index.js';
// @ts-ignore
import { SendReminderRequestBuilderRequestsMetadata, type SendReminderRequestBuilder } from './sendReminder/index.js';
// @ts-ignore
import { StopRequestBuilderRequestsMetadata, type StopRequestBuilder } from './stop/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the instances property of the microsoft.graph.accessReview entity.
 */
export interface AccessReviewItemRequestBuilder extends BaseRequestBuilder<AccessReviewItemRequestBuilder> {
    /**
     * Provides operations to call the applyDecisions method.
     */
    get applyDecisions(): ApplyDecisionsRequestBuilder;
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReview entity.
     */
    get decisions(): DecisionsRequestBuilder;
    /**
     * Provides operations to manage the myDecisions property of the microsoft.graph.accessReview entity.
     */
    get myDecisions(): MyDecisionsRequestBuilder;
    /**
     * Provides operations to call the resetDecisions method.
     */
    get resetDecisions(): ResetDecisionsRequestBuilder;
    /**
     * Provides operations to manage the reviewers property of the microsoft.graph.accessReview entity.
     */
    get reviewers(): ReviewersRequestBuilder;
    /**
     * Provides operations to call the sendReminder method.
     */
    get sendReminder(): SendReminderRequestBuilder;
    /**
     * Provides operations to call the stop method.
     */
    get stop(): StopRequestBuilder;
    /**
     * Delete navigation property instances for accessReviews
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReview>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReview | undefined>;
    /**
     * Update the navigation property instances in accessReviews
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReview>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessReview, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReview | undefined>;
    /**
     * Delete navigation property instances for accessReviews
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property instances in accessReviews
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessReview, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
 */
export interface AccessReviewItemRequestBuilderGetQueryParameters {
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
export const AccessReviewItemRequestBuilderUriTemplate = "{+baseurl}/accessReviews/{accessReview%2Did}/instances/{accessReview%2Did1}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessReviewItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessReviewItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    applyDecisions: {
        requestsMetadata: ApplyDecisionsRequestBuilderRequestsMetadata,
    },
    decisions: {
        requestsMetadata: DecisionsRequestBuilderRequestsMetadata,
        navigationMetadata: DecisionsRequestBuilderNavigationMetadata,
    },
    myDecisions: {
        requestsMetadata: MyDecisionsRequestBuilderRequestsMetadata,
        navigationMetadata: MyDecisionsRequestBuilderNavigationMetadata,
    },
    resetDecisions: {
        requestsMetadata: ResetDecisionsRequestBuilderRequestsMetadata,
    },
    reviewers: {
        requestsMetadata: ReviewersRequestBuilderRequestsMetadata,
        navigationMetadata: ReviewersRequestBuilderNavigationMetadata,
    },
    sendReminder: {
        requestsMetadata: SendReminderRequestBuilderRequestsMetadata,
    },
    stop: {
        requestsMetadata: StopRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessReviewItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessReviewItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewFromDiscriminatorValue,
        queryParametersMapper: AccessReviewItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessReviewItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReview,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
