/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserExperienceAnalyticsImpactingProcessCollectionResponseFromDiscriminatorValue, createUserExperienceAnalyticsImpactingProcessFromDiscriminatorValue, serializeUserExperienceAnalyticsImpactingProcess, type UserExperienceAnalyticsImpactingProcess, type UserExperienceAnalyticsImpactingProcessCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UserExperienceAnalyticsImpactingProcessItemRequestBuilder, UserExperienceAnalyticsImpactingProcessItemRequestBuilderRequestsMetadata, UserExperienceAnalyticsImpactingProcessItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsImpactingProcess property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsImpactingProcessRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsImpactingProcessRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userExperienceAnalyticsImpactingProcess property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsImpactingProcessId The unique identifier of userExperienceAnalyticsImpactingProcess
     * @returns a UserExperienceAnalyticsImpactingProcessItemRequestBuilder
     */
     byUserExperienceAnalyticsImpactingProcessId(userExperienceAnalyticsImpactingProcessId: string) : UserExperienceAnalyticsImpactingProcessItemRequestBuilder;
    /**
     * User experience analytics impacting process
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsImpactingProcessCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsImpactingProcessRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsImpactingProcessCollectionResponse | undefined>;
    /**
     * Create new navigation property to userExperienceAnalyticsImpactingProcess for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsImpactingProcess
     */
     post(body: UserExperienceAnalyticsImpactingProcess, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsImpactingProcess | undefined>;
    /**
     * User experience analytics impacting process
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsImpactingProcessRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userExperienceAnalyticsImpactingProcess for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UserExperienceAnalyticsImpactingProcess, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * User experience analytics impacting process
 */
export interface UserExperienceAnalyticsImpactingProcessRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsImpactingProcessRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserExperienceAnalyticsImpactingProcessRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsImpactingProcessRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserExperienceAnalyticsImpactingProcessId: {
        uriTemplate: UserExperienceAnalyticsImpactingProcessItemRequestBuilderUriTemplate,
        requestsMetadata: UserExperienceAnalyticsImpactingProcessItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userExperienceAnalyticsImpactingProcess%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsImpactingProcessRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserExperienceAnalyticsImpactingProcessCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsImpactingProcessRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserExperienceAnalyticsImpactingProcessFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsImpactingProcess,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserExperienceAnalyticsImpactingProcessRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsImpactingProcess{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */