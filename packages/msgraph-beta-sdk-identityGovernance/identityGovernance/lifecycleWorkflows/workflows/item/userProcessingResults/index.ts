/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserProcessingResultCollectionResponseFromDiscriminatorValue, type UserProcessingResultCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/identityGovernance/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserProcessingResultItemRequestBuilder, UserProcessingResultItemRequestBuilderNavigationMetadata, UserProcessingResultItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata, type MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder } from './microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.workflow entity.
 */
export interface UserProcessingResultsRequestBuilder extends BaseRequestBuilder<UserProcessingResultsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.workflow entity.
     * @param userProcessingResultId The unique identifier of userProcessingResult
     * @returns {UserProcessingResultItemRequestBuilder}
     */
     byUserProcessingResultId(userProcessingResultId: string) : UserProcessingResultItemRequestBuilder;
    /**
     * Get the userProcessingResult resources for a workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserProcessingResultCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflow-list-userprocessingresults?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UserProcessingResultsRequestBuilderGetQueryParameters> | undefined) : Promise<UserProcessingResultCollectionResponse | undefined>;
    /**
     * Provides operations to call the summary method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns {MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder}
     */
     microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined) : MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder;
    /**
     * Get the userProcessingResult resources for a workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserProcessingResultsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the userProcessingResult resources for a workflow.
 */
export interface UserProcessingResultsRequestBuilderGetQueryParameters {
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
export const UserProcessingResultsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/userProcessingResults{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserProcessingResultsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserProcessingResultsRequestBuilderNavigationMetadata: Record<Exclude<keyof UserProcessingResultsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserProcessingResultId: {
        requestsMetadata: UserProcessingResultItemRequestBuilderRequestsMetadata,
        navigationMetadata: UserProcessingResultItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["userProcessingResult%2Did"],
    },
    microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime: {
        requestsMetadata: MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata,
        pathParametersMappings: ["endDateTime", "startDateTime"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserProcessingResultsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserProcessingResultsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserProcessingResultCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserProcessingResultsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
