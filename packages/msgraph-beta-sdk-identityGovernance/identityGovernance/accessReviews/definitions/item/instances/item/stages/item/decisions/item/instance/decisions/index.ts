/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue, createAccessReviewInstanceDecisionItemFromDiscriminatorValue, serializeAccessReviewInstanceDecisionItem, type AccessReviewInstanceDecisionItem, type AccessReviewInstanceDecisionItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/index.js';
// @ts-ignore
import { AccessReviewInstanceDecisionItemItemRequestBuilderNavigationMetadata, AccessReviewInstanceDecisionItemItemRequestBuilderRequestsMetadata, type AccessReviewInstanceDecisionItemItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { RecordAllDecisionsRequestBuilderRequestsMetadata, type RecordAllDecisionsRequestBuilder } from './recordAllDecisions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity.
 */
export interface DecisionsRequestBuilder extends BaseRequestBuilder<DecisionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the recordAllDecisions method.
     */
    get recordAllDecisions(): RecordAllDecisionsRequestBuilder;
    /**
     * Provides operations to manage the decisions property of the microsoft.graph.accessReviewInstance entity.
     * @param accessReviewInstanceDecisionItemId1 The unique identifier of accessReviewInstanceDecisionItem
     * @returns {AccessReviewInstanceDecisionItemItemRequestBuilder}
     */
     byAccessReviewInstanceDecisionItemId1(accessReviewInstanceDecisionItemId1: string) : AccessReviewInstanceDecisionItemItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns {FilterByCurrentUserWithOnRequestBuilder}
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewInstanceDecisionItemCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DecisionsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewInstanceDecisionItemCollectionResponse | undefined>;
    /**
     * Create new navigation property to decisions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewInstanceDecisionItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AccessReviewInstanceDecisionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined>;
    /**
     * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DecisionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to decisions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AccessReviewInstanceDecisionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export interface DecisionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const DecisionsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}/instance/decisions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DecisionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DecisionsRequestBuilderNavigationMetadata: Record<Exclude<keyof DecisionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessReviewInstanceDecisionItemId1: {
        requestsMetadata: AccessReviewInstanceDecisionItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessReviewInstanceDecisionItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessReviewInstanceDecisionItem%2Did1"],
    },
    filterByCurrentUserWithOn: {
        requestsMetadata: FilterByCurrentUserWithOnRequestBuilderRequestsMetadata,
        pathParametersMappings: ["on"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    recordAllDecisions: {
        requestsMetadata: RecordAllDecisionsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DecisionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DecisionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DecisionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DecisionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewInstanceDecisionItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewInstanceDecisionItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
