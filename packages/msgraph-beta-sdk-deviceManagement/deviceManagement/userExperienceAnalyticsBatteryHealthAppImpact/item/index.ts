/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserExperienceAnalyticsBatteryHealthAppImpactFromDiscriminatorValue, serializeUserExperienceAnalyticsBatteryHealthAppImpact, type UserExperienceAnalyticsBatteryHealthAppImpact } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsBatteryHealthAppImpact property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilder> {
    /**
     * Delete navigation property userExperienceAnalyticsBatteryHealthAppImpact for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * User Experience Analytics Battery Health App Impact
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBatteryHealthAppImpact
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsBatteryHealthAppImpact | undefined>;
    /**
     * Update the navigation property userExperienceAnalyticsBatteryHealthAppImpact in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBatteryHealthAppImpact
     */
     patch(body: UserExperienceAnalyticsBatteryHealthAppImpact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsBatteryHealthAppImpact | undefined>;
    /**
     * Delete navigation property userExperienceAnalyticsBatteryHealthAppImpact for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * User Experience Analytics Battery Health App Impact
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userExperienceAnalyticsBatteryHealthAppImpact in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: UserExperienceAnalyticsBatteryHealthAppImpact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * User Experience Analytics Battery Health App Impact
 */
export interface UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderGetQueryParameters {
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
const UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createUserExperienceAnalyticsBatteryHealthAppImpactFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserExperienceAnalyticsBatteryHealthAppImpactFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsBatteryHealthAppImpact,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserExperienceAnalyticsBatteryHealthAppImpactItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */