/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTimeOffFromDiscriminatorValue, serializeTimeOff, type TimeOff } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
 */
export interface TimeOffItemRequestBuilder extends BaseRequestBuilder<TimeOffItemRequestBuilder> {
    /**
     * Delete a timeOff instance from a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/timeoff-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of a timeOff object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOff
     * @see {@link https://learn.microsoft.com/graph/api/timeoff-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TimeOffItemRequestBuilderGetQueryParameters> | undefined) : Promise<TimeOff | undefined>;
    /**
     * Replace an existing timeOff. If the specified timeOff doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOff
     * @see {@link https://learn.microsoft.com/graph/api/timeoff-put?view=graph-rest-1.0|Find more info here}
     */
     patch(body: TimeOff, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TimeOff | undefined>;
    /**
     * Delete a timeOff instance from a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of a timeOff object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TimeOffItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Replace an existing timeOff. If the specified timeOff doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TimeOff, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a timeOff object by ID.
 */
export interface TimeOffItemRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TimeOffItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TimeOffItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTimeOffFromDiscriminatorValue,
        queryParametersMapper: TimeOffItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTimeOffFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTimeOff,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TimeOffItemRequestBuilderUriTemplate = "{+baseurl}/teamwork/teamTemplates/{teamTemplate%2Did}/definitions/{teamTemplateDefinition%2Did}/teamDefinition/schedule/timesOff/{timeOff%2Did}{?%24select}";
/* tslint:enable */
/* eslint-enable */