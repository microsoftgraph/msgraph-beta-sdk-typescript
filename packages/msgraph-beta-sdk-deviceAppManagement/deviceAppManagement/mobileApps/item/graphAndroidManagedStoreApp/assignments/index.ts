/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobileAppAssignmentCollectionResponseFromDiscriminatorValue, createMobileAppAssignmentFromDiscriminatorValue, serializeMobileAppAssignment, type MobileAppAssignment, type MobileAppAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MobileAppAssignmentItemRequestBuilderRequestsMetadata, MobileAppAssignmentItemRequestBuilderUriTemplate, type MobileAppAssignmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
 */
export interface AssignmentsRequestBuilder extends BaseRequestBuilder<AssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     * @param mobileAppAssignmentId The unique identifier of mobileAppAssignment
     * @returns a MobileAppAssignmentItemRequestBuilder
     */
     byMobileAppAssignmentId(mobileAppAssignmentId: string) : MobileAppAssignmentItemRequestBuilder;
    /**
     * The list of group assignments for this mobile app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppAssignmentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<MobileAppAssignmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to assignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppAssignment
     */
     post(body: MobileAppAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileAppAssignment | undefined>;
    /**
     * The list of group assignments for this mobile app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to assignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MobileAppAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of group assignments for this mobile app.
 */
export interface AssignmentsRequestBuilderGetQueryParameters {
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
const AssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileAppAssignmentId: {
        uriTemplate: MobileAppAssignmentItemRequestBuilderUriTemplate,
        requestsMetadata: MobileAppAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mobileAppAssignment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileAppAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignmentsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.androidManagedStoreApp/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */