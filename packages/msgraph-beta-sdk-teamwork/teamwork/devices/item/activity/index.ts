/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTeamworkDeviceActivityFromDiscriminatorValue, serializeTeamworkDeviceActivity, type TeamworkDeviceActivity } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activity property of the microsoft.graph.teamworkDevice entity.
 */
export interface ActivityRequestBuilder extends BaseRequestBuilder<ActivityRequestBuilder> {
    /**
     * Delete navigation property activity for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the activity status of a Microsoft Teams-enabled device. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkDeviceActivity
     * @see {@link https://learn.microsoft.com/graph/api/teamworkdeviceactivity-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ActivityRequestBuilderGetQueryParameters> | undefined) : Promise<TeamworkDeviceActivity | undefined>;
    /**
     * Update the navigation property activity in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkDeviceActivity
     */
     patch(body: TeamworkDeviceActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamworkDeviceActivity | undefined>;
    /**
     * Delete navigation property activity for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the activity status of a Microsoft Teams-enabled device. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ActivityRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property activity in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TeamworkDeviceActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the activity status of a Microsoft Teams-enabled device. 
 */
export interface ActivityRequestBuilderGetQueryParameters {
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
const ActivityRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ActivityRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTeamworkDeviceActivityFromDiscriminatorValue,
        queryParametersMapper: ActivityRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTeamworkDeviceActivityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamworkDeviceActivity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ActivityRequestBuilderUriTemplate = "{+baseurl}/teamwork/devices/{teamworkDevice%2Did}/activity{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */