/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPlannerRosterMemberCollectionResponseFromDiscriminatorValue, createPlannerRosterMemberFromDiscriminatorValue, serializePlannerRosterMember, type PlannerRosterMember, type PlannerRosterMemberCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { PlannerRosterMemberItemRequestBuilderRequestsMetadata, type PlannerRosterMemberItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.plannerRoster entity.
 */
export interface MembersRequestBuilder extends BaseRequestBuilder<MembersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.plannerRoster entity.
     * @param plannerRosterMemberId The unique identifier of plannerRosterMember
     * @returns {PlannerRosterMemberItemRequestBuilder}
     */
     byPlannerRosterMemberId(plannerRosterMemberId: string) : PlannerRosterMemberItemRequestBuilder;
    /**
     * Get the list of plannerRosterMembers from a plannerRoster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PlannerRosterMemberCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/plannerroster-list-members?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MembersRequestBuilderGetQueryParameters> | undefined) : Promise<PlannerRosterMemberCollectionResponse | undefined>;
    /**
     * Add a member to the plannerRoster object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PlannerRosterMember>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/plannerroster-post-members?view=graph-rest-beta|Find more info here}
     */
     post(body: PlannerRosterMember, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PlannerRosterMember | undefined>;
    /**
     * Get the list of plannerRosterMembers from a plannerRoster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MembersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add a member to the plannerRoster object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PlannerRosterMember, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the list of plannerRosterMembers from a plannerRoster.
 */
export interface MembersRequestBuilderGetQueryParameters {
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
export const MembersRequestBuilderUriTemplate = "{+baseurl}/planner/rosters/{plannerRoster%2Did}/members{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MembersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MembersRequestBuilderNavigationMetadata: Record<Exclude<keyof MembersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPlannerRosterMemberId: {
        requestsMetadata: PlannerRosterMemberItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["plannerRosterMember%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MembersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MembersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerRosterMemberCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MembersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MembersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlannerRosterMemberFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePlannerRosterMember,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
