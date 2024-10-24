/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTimeOffReasonCollectionResponseFromDiscriminatorValue, createTimeOffReasonFromDiscriminatorValue, serializeTimeOffReason, type TimeOffReason, type TimeOffReasonCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TimeOffReasonItemRequestBuilderRequestsMetadata, type TimeOffReasonItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
 */
export interface TimeOffReasonsRequestBuilder extends BaseRequestBuilder<TimeOffReasonsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
     * @param timeOffReasonId The unique identifier of timeOffReason
     * @returns {TimeOffReasonItemRequestBuilder}
     */
     byTimeOffReasonId(timeOffReasonId: string) : TimeOffReasonItemRequestBuilder;
    /**
     * The set of reasons for a time off in the schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TimeOffReasonCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TimeOffReasonsRequestBuilderGetQueryParameters> | undefined) : Promise<TimeOffReasonCollectionResponse | undefined>;
    /**
     * Create new navigation property to timeOffReasons for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TimeOffReason>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TimeOffReason, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TimeOffReason | undefined>;
    /**
     * The set of reasons for a time off in the schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TimeOffReasonsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to timeOffReasons for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TimeOffReason, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The set of reasons for a time off in the schedule.
 */
export interface TimeOffReasonsRequestBuilderGetQueryParameters {
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
export const TimeOffReasonsRequestBuilderUriTemplate = "{+baseurl}/teamwork/teamTemplates/{teamTemplate%2Did}/definitions/{teamTemplateDefinition%2Did}/teamDefinition/schedule/timeOffReasons{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TimeOffReasonsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TimeOffReasonsRequestBuilderNavigationMetadata: Record<Exclude<keyof TimeOffReasonsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTimeOffReasonId: {
        requestsMetadata: TimeOffReasonItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["timeOffReason%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TimeOffReasonsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TimeOffReasonsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTimeOffReasonCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TimeOffReasonsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: TimeOffReasonsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTimeOffReasonFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTimeOffReason,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
