/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobileAppProvisioningConfigGroupAssignmentCollectionResponseFromDiscriminatorValue, createMobileAppProvisioningConfigGroupAssignmentFromDiscriminatorValue, serializeMobileAppProvisioningConfigGroupAssignment, type MobileAppProvisioningConfigGroupAssignment, type MobileAppProvisioningConfigGroupAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MobileAppProvisioningConfigGroupAssignmentItemRequestBuilderRequestsMetadata, MobileAppProvisioningConfigGroupAssignmentItemRequestBuilderUriTemplate, type MobileAppProvisioningConfigGroupAssignmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groupAssignments property of the microsoft.graph.iosLobAppProvisioningConfiguration entity.
 */
export interface GroupAssignmentsRequestBuilder extends BaseRequestBuilder<GroupAssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the groupAssignments property of the microsoft.graph.iosLobAppProvisioningConfiguration entity.
     * @param mobileAppProvisioningConfigGroupAssignmentId The unique identifier of mobileAppProvisioningConfigGroupAssignment
     * @returns a MobileAppProvisioningConfigGroupAssignmentItemRequestBuilder
     */
     byMobileAppProvisioningConfigGroupAssignmentId(mobileAppProvisioningConfigGroupAssignmentId: string) : MobileAppProvisioningConfigGroupAssignmentItemRequestBuilder;
    /**
     * The associated group assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppProvisioningConfigGroupAssignmentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<GroupAssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<MobileAppProvisioningConfigGroupAssignmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to groupAssignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppProvisioningConfigGroupAssignment
     */
     post(body: MobileAppProvisioningConfigGroupAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileAppProvisioningConfigGroupAssignment | undefined>;
    /**
     * The associated group assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupAssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to groupAssignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MobileAppProvisioningConfigGroupAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The associated group assignments.
 */
export interface GroupAssignmentsRequestBuilderGetQueryParameters {
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
const GroupAssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const GroupAssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupAssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileAppProvisioningConfigGroupAssignmentId: {
        uriTemplate: MobileAppProvisioningConfigGroupAssignmentItemRequestBuilderUriTemplate,
        requestsMetadata: MobileAppProvisioningConfigGroupAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mobileAppProvisioningConfigGroupAssignment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupAssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppProvisioningConfigGroupAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: GroupAssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppProvisioningConfigGroupAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileAppProvisioningConfigGroupAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GroupAssignmentsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration%2Did}/groupAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */